import React from "react";
import styles from './About.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    isError: false,
    errorMessage: ''
  };

  componentDidMount() {
    octokit.repos.listForUser({
      username: '6thSence',
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        isLoading: false,
        isError: true,
        errorMessage: "Репозиторий не найден"
      })
    })
  };

  render() {
    const { isLoading, repoList, isError, errorMessage } = this.state;

    return (
      <div>
        <div className={styles.header}>{isLoading ? <CircularProgress /> : !isError &&
          <div className={styles.header_elements}>
            <img className={styles.header_elementsImage} src={repoList[0].owner.avatar_url} alt='Фото' ></img>
            <div className={styles.header_elementsText}>
              <h1 className={styles.elementsText_title}>Репозитории</h1>
              <h1>{repoList[0].owner.login}</h1>
            </div>
          </div>
        }</div>
        <div>
          {isError ? !isLoading && <p className={styles.errorMessage}>{errorMessage}</p> : (
            !isLoading && <ol>
            {repoList.map(repo => (<li className={styles.element} key={repo.id}>
              <a className={styles.link} href={repo.html_url} target="_blank" rel="noopener noreferrer" >{repo.name}</a>
            </li>))}</ol>)
          }
        </div>
      </div>
    );
  }
};

export default About;