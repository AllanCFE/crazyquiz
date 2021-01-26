import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>{db.title}</title>
        <meta name="description" content={db.description}></meta>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="crazyquiz.allancfe.vercel.app"/>
        <meta property="twitter:url" content="https://crazyquiz.allancfe.vercel.app/"/>
        <meta name="twitter:title" content={db.title}/>
        <meta name="twitter:description" content={db.description}/>
        <meta name="twitter:image" content={"https://crazyquiz.allancfe.vercel.app/" + db.bg}/>

        <meta property="og:title" content={db.title}/>
        <meta property="og:description" content={db.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://crazyquiz.allancfe.vercel.app/"/>
        <meta property="og:image" content={"https://crazyquiz.allancfe.vercel.app"+ db.bg}/>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AllanCFE" />
    </QuizBackground>
  );
}