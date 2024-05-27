import Image from "next/image";
import img from "../../../lib/img/Om-oss-bild.jpg";
import style from "../ABOUT/page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={style.container}>
      <Image src={img} alt="bild på instruktör" width={453} height={612} />
      <section>
        <h1>Om oss</h1>
        <p>
          Horizon Jiu-Jitsu är en inkluderande BJJ-klubb som välkomnar alla,
          oavsett ålder eller erfarenhetsnivå. Vår klubb skapades av tre nära
          vänner som delar en gemensam passion för brasiliansk jiu-jitsu och en
          vision om att skapa en gemenskap där alla kan utvecklas och trivas.
          <br />
        </p>
        <p>
          <b>Vår Historia</b>
          <br />
          Horizon Jiu-Jitsu grundades med en enkel men kraftfull vision: att bli
          den största och mest framstående BJJ-klubben i Sverige. Våra grundare,
          Erik, Anna och Mikael, har tillsammans över 30 års erfarenhet inom
          kampsport och en obeveklig drivkraft att dela sina kunskaper och
          erfarenheter med andra. Deras resa började som ett gemensamt intresse
          och har nu utvecklats till en blomstrande klubb med en stark känsla av
          gemenskap och stöd.
          <br />
        </p>
        <p>
          <b>Vår Vision</b>
          <br />
          På Horizon Jiu-Jitsu strävar vi efter att erbjuda en träningsmiljö som
          är både utmanande och stödjande. Vi tror på att varje medlem har
          potential att nå sina personliga mål, oavsett om det är att förbättra
          sin fysiska kondition, tävla på hög nivå, eller helt enkelt att lära
          sig självförsvar. Vår filosofi bygger på respekt, disciplin och
          ständig förbättring.
        </p>
        <p>
          <b>Våra Tränare</b>
          <br />
          Våra tränare är dedikerade och erfarna utövare av brasiliansk
          jiu-jitsu, och de brinner för att hjälpa våra medlemmar att utvecklas.
          Med personlig uppmärksamhet och noggrant strukturerade
          träningsprogram, säkerställer vi att varje medlem får den vägledning
          och stöd de behöver för att nå sina mål.
          <br />
        </p>
        <strong>Varför Välja Oss?</strong>
        <br />
        <ul>
          <li>
            Inkluderande Gemenskap: Vi välkomnar alla, från nybörjare till
            avancerade utövare.
          </li>
          <li>
            Professionella Tränare: Våra tränare är erfarna ochcertifierade inom
            BJJ.
          </li>
          <li>
            Personlig Utveckling: Fokus på individuell utveckling och framsteg.
          </li>
          <li>
            Tävling och Rekreation: Oavsett om du vill tävla eller träna för
            hälsans skull, har vi något för dig.
          </li>
        </ul>
        <p>
          Kom och bli en del av vår växande familj på Horizon Jiu-Jitsu. Vi ser
          fram emot att träna och växa tillsammans med dig!
          <br />
          <br />
          <Link href={"/ACADEMY/REGISTER"}>Bli medlem här!</Link>
        </p>
      </section>
    </div>
  );
}
