import Jumbo from "../komponenty/Jumbo";
import ZonaKomfortu from "../komponenty/ZonaKomfortu";
import PrecoMy from "../komponenty/PrecoMy";
import Spojenie from "../komponenty/Spojenie";
const Domov = () => {
  return (
    <>
      <div className="container">
        <Jumbo />
        <ZonaKomfortu />
      </div>
      <PrecoMy />
      <Spojenie />
    </>
  );
};

export default Domov;
