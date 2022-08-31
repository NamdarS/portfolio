import Head from 'next/head';
import Header from '../components/Header';
import TextSection from '../components/TextSection';

export default function Home() {
  const aboutTitle = 'About';
  const aboutText = `I'm a software engineer, blockchain and AI enthusiast, and a double degree
    student, studying computer Science at the University of Waterloo and business
    administration at Wilfrid Laurier University.`;

  const interestsTitle = 'Interests';
  const interestsText = `Fintech, Cryptographic Assets, Machine/Deep Learning, 
  Distributed Systems, High Frequency Algorithmic Trading`;

  const projectsTitle = 'Projects';

  const projectsText1 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/cl-maker"
        >
          Cover Letter Gen
        </a>
      </span>{' '}
      — Prompt based cover letters using GPT-3 Davinci Language Model
    </p>
  );

  const projectsText2 = (
    <p>
      <span>
        <a style={{ color: '#ff2467' }} href="https://www.glitchzuki.com/">
          GlitchZuki
        </a>
      </span>{' '}
      — fullstack NFT DApp for the GlitchZuki token using the ERC-721A interface
    </p>
  );

  const projectsText3 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/RomanCalculator"
        >
          Roman Calculator
        </a>
      </span>{' '}
      — Roman numeral calculator and converter app for android, written in Java
      and Kotlin
    </p>
  );

  const projectsText4 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/Blackjack"
        >
          BlackJack4000
        </a>
      </span>{' '}
      — Simple no-stack single player Blackjack simulator based on MGM rules
    </p>
  );

  const projectsText5 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/Slidetimer"
        >
          Slidetimer
        </a>
      </span>{' '}
      — Sleek timer and alarm app for android written in Java and Kotlin
    </p>
  );

  const projectsText6 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/What-to-Wear"
        >
          What to Wear
        </a>
      </span>{' '}
      — Weather based outfit suggesstion no-stack webapp powered by the
      Weatherbit API
    </p>
  );

  const projectsText7 = (
    <p>
      <span>
        <a
          style={{ color: '#ff2467' }}
          href="https://github.com/NamdarS/Football-Mania"
        >
          Football Mania
        </a>
      </span>{' '}
      — Arcade style college football game made in Python using the Pygame
      library
    </p>
  );

  return (
    <div className="page">
      <Head>
        <title>Namdar Sadiq</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div className="main-body">
        <div className="spacer">
          <TextSection title={aboutTitle} text={aboutText} />
        </div>

        <div className="spacer">
          <TextSection title={interestsTitle} text={interestsText} />
        </div>
        <div className="spacer">
          <TextSection title={projectsTitle} text={projectsText1} />
          <TextSection text={projectsText2} />
          <TextSection text={projectsText3} />
          <TextSection text={projectsText4} />
          <TextSection text={projectsText5} />
          <TextSection text={projectsText6} />
          <TextSection text={projectsText7} />
        </div>
      </div>
    </div>
  );
}
