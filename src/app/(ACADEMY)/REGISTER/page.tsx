import SignUp from "../../../lib/components/signUp";

export default async function Register() {
  return (
    <>
      <aside>
        <p>
          Att bli medlem på Horizon Jiu-Jitsu innebär att du får tillgång till
          en rad fantastiska fördelar och förmåner som hjälper dig att maximera
          din träningsupplevelse och nå dina personliga mål. Här är några av de
          många fördelar du kan förvänta dig som medlem hos oss:
        </p>

        <b>Fördelar</b>
        <ol>
          <li>Professionell Träning</li>
          <li>Inkluderande och Stödjande Gemenskap</li>
          <li>Mångsidiga Träningsalternativ</li>
          <li>Flexibla Träningsscheman</li>
          <li>Moderna Faciliteter</li>
        </ol>
        <p>Bli medlem här nedan:</p>
      </aside>
      <SignUp />
    </>
  );
}
