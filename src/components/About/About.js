import React from "react";
import styles from "./About.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    isError: false,
    errorMessage: ""
  };

  componentDidMount() {
    octokit.repos.listForUser({
      username: "Golubtsov-Sergey",
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    })
    .catch((err) => {
      this.setState({
        isLoading: false,
        isError: true,
        errorMessage: "Репозиторий не найден"
      });
    });
  }

  render() {
    return (<div>
      <div className={styles.header}>{this.state.isLoading ? <CircularProgress /> : !this.state.isError &&
        <div className={styles.header_elements}>
          <img className={styles.header_elementsImage} src={this.state.repoList[0].owner.avatar_url} alt='Фото' ></img>
          <div className={styles.header_elementsText}>
            <h1 className={styles.elementsText_title}>Голубцов Сергей</h1>
            <p className={styles.elementsText_link}>from Kharkiv, Ukraine</p>
            <p className={styles.elementsText_link}><img className={styles.elementsText_linkImg}
              src="https://sve-react-app-pjl1lsdf4.now.sh/static/media/mail.20386136.svg"
              alt="meil"></img>golubtsovsergei581@gmail.com</p>
            <p className={styles.elementsText_link}><img className={styles.elementsText_linkImg}
              src="https://sve-react-app-pjl1lsdf4.now.sh/static/media/telegram.4073458b.svg"
              alt="telegram" ></img>+380664206469</p>
          </div>
        </div>
      }</div>
      <div>
        <h1 className={styles.repo}>Репозитории на github</h1>
        {this.state.isError ? !this.state.isLoading && <p className={styles.errorMessage}>{this.state.errorMessage}</p> : (
          !this.state.isLoading && <ol>
            {this.state.repoList.map((repo) => (<li className={styles.element} key={repo.id}>
              <a className={styles.link} href={repo.html_url} target="_blank" rel="noopener noreferrer" >{repo.name}</a>
            </li>))}</ol>)
        }
      </div>
    </div>
    );
  }
}

export default About;