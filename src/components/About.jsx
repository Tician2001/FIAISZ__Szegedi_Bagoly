import React from 'react'
import "../styles/AboutStyles.css";
import Kep1 from "../assets/kecskes.jpg";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import TK from "../assets/szegediTK_1.jpg.png";


const About = () => {
  return (
    <div className="container-fluid d-flex justify-content-center text-center h4 py-4">
      <div className="set">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
            <div className="set set2">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
            <div className="set set3">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
      <div className="row content">
        <div className="col-sm-2 sidenav position-static float-left">
          <div className="panel panel-default">
            <p><a href="/szuloknek">Szülőknek</a></p>
          </div>
          <div className="panel panel-default ">
            <p><a href="/diakoknak">Diákoknak</a></p>
          </div>
          <div className="panel panel-default">
            <p><a href="/hirlevel">Hírlevél</a></p>
          </div>
          <div className="panel panel-default" id="kreta">
            <p><a href="https://idp.e-kreta.hu/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dkreta-web%26response_type%3Dcode%26scope%3Dopenid%26state%3DOpenIdConnect.AuthenticationProperties%253DNORHRvbF5rHrjHrefhJeBa_x43g17xLRkuD74ipe2LYfdJwiAMFynD_3pPxrpiXd0ulY2U87Nr7aj5q9kn5e5y2hHRveau6wMvVC_99WEugkfiZsJ33FmI2x4b-_ccOmPNE1b5M1OMcrC125LdKLcw%26response_mode%3Dform_post%26nonce%3D638296803926746520.Yjg1YmIyOGYtYjQ0MC00YmE3LTg3Y2YtYmRlMTc1OWM1ZWI4ZDgzNTM4NDUtYWU3MC00MzY4LTg4NzMtYzNiYWI5ZTQwNDMx%26institute_code%3Dklik029662001%26institute_data%3DeyJuZXh0X3VwZGF0ZV9kYXRlX3RpbWUiOiIyMDIzLjA5LjE5LiAyMjowMCIsImlzX3N6aXJfaW5zdGl0dXRlIjpmYWxzZSwiaXNfbGljZW5jZV92YWxpZCI6dHJ1ZSwiaXNfYXJjaGl2ZSI6ZmFsc2UsImlzX2Nzb2trZW50ZXR0X2dvbmR2aXNlbG8iOnRydWUsImlzX2ludGV6bWVueV9yb3ZpZG5ldiI6dHJ1ZSwiaXNfc3VjY2Vzc19hdXRob3JpemVkX2RhdGUiOmZhbHNlfQ%253D%253D%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fklik029662001.e-kreta.hu%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin" target="_blank">Kréta E-napló</a></p>
          </div>
          <div className="panel panel-default" id="kreta">
            <p><a href="https://ngsz.hu/2021/01/01/kozetkeztetes/#tajekoztatok" target="_blank">Közétkeztetés</a></p>
          </div>
          <div className="panel panel-default">
            <p><a href="https://drive.google.com/file/d/18KzjcPKw03m8qutMPMbtMAn8sggobsav/view" target="_blank">Iskolai Segítők</a></p>
          </div>
          <div className="panel panel-default">
            <p><a href="/" >Iskola pszichológus</a></p>
          </div>

          <div className="panel panel-default">
            <p><a href="/aranykapu" >Aranykapu</a></p>
          </div>



        </div >
        <div className="container col-sm-8 bg-transparent border  rounded shadow text-left">

          <div className=''>
        <div className=" service_section layout_padding">
        <div className=" service_container">
          <div className=" ">
            <div className="heading_container">
              <h2>
                Kedves <span>Látogatók!</span>
              </h2>
              <p>
              Örömmel köszöntünk benneteket iskolánkban, ahol a tudás és az örömteli tanulás otthonra lel. Szeretnénk bemutatni nektek intézményünket, ahol diákjaink számára inspiráló és kihívásokkal teli tanulási környezetet teremtünk. Az iskolánkban minden nap egy új lehetőség, hogy megismerjük a világot, fejlődjünk, és kibontakozzunk a tehetségeinkben. 
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="box ">

                  <div className="detail-box">
                    <h5>
                      Élmények
                    </h5>
                    <div className=" shadow multi-collapse" id="multiCollapseExample1">
                      <div id='introducingcard'  className="card card-body">
                      Elárulom, hogy az iskola diákjaként sok mindent tudok az intézményről, ami talán hasznos lehet az érdeklődőnek. A bemutatást azzal kezdeném, hogy ma, vagyis a 2022/2023-as tanévben mit ad a Szegedi Fekete István Általános Iskola, - vagy ahogy mi hívjuk, a „baglyos iskola”- az ide járó gyerekeknek és felnőtteknek: Először is élményeket.<br/><hr/>
                      Kezdjük a reggelekkel. Alsós koromban „beszélgetőkörökkel” indult a nap. Mindenki elmondhatta a feldobott témához kapcsolódó gondolatát, élményét, és a beszélgetésből észrevétlenül lett tanulás. Nagy könnyebbség volt az is, hogy a tanítóink tekintettel voltak a pillanatnyi hangulatunkra. Ha már nem ment jól a figyelés, ha már többen nem tudták tartani a tempót, akkor megálltunk a tanulással és kimehettünk az udvarra futkározni, játszani. Az a 10-15 perces önfeledt játék elég volt ahhoz, hogy a szünet után újult energiával térjünk vissza a tudományokhoz. És az is nagyszerű volt, hogy házi feladatot sosem kellett hazavinni. Mivel délután fél négyig tartottak a foglalkozásaink, otthonra csak az élményeinket vittük, vagy néha az olvasókönyvet, de csak azért, hogy eldicsekedjünk, hogy milyen ügyesen is olvasunk.
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">

                  <div className="detail-box">
                    <h5>
                      
                    </h5>
                    <p>
                    Élményeket szerzünk a teljes nap során mi is, felsősök, mikor valami új programot találnak ki a tanáraink (alkotónapok, bulik, kirándulások), izgalmas, új projektekben vehetünk részt – mint idén a F.É.K. Projekt vagy a „Kapcsolódjunk! kihívás”– vagy csak részt veszünk a tanórákon, ahol sokszor csoportokban alkotunk, egymástól tanulunk.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">

                <div className="detail-box">
                    <h5>
                      Lehetőségek
                    </h5>
                    <div className="collapse shadow multi-collapse" id="multiCollapseExample2">
                      <div id='introducingcard'  className="card card-body">
                      Aki szeret például sportolni, az részt vehet a délutáni judo foglalkozáson, vagy tagja lehet az iskolai Bozsik-program focicsapatának. Egy héten kétszer is van edzés, jóidőben az iskola által használható műfüves focipályán. Aki komolyabban érdeklődik a természettudományok iránt, az tehetséggondozó szakköröket látogathat; ha a művészetek érdekelnek, akkor járhatsz a mindig izgalmas feladatokat adó rajzszakkörre vagy énekkarra is. Mert nálunk az énekórák sem unalmasak. Rendszeresen zenekarrá alakulunk, ütjük a ritmust, jókedvvel énekelnünk. (Iskolánknak van tanári zenekara is, amit úgy neveztek el, hogy Black Steve Boys! ☺ Imádjuk őket!)<br/><hr/>

És lehetőségünk van arra is, hogy felzárkóztató délutáni órákon vegyünk részt, ha valamely tantárgyban lemaradtunk vagy nehezen haladunk a tanulással. Akinek speciális igénye van, mint például nekem is, külön foglalkozásokon vehet részt a fejlesztőpedagógussal. De tanórákon is külön figyelnek arra, hogy a képességeinknek megfelelő feladatokat kapjunk. Még dolgozatok esetén is! 
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">

                  <div className="detail-box">
                    
                    <p>
                    Az iskolai élmények sokszínűsége és gazdagsága kiemelkedő fontosságú számunkra. Minden tanítási nap egy felfedezés, ahol a diákok új ismereteket szereznek, kreativitásukat fejlesztik, és barátságokat építenek. 
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about_section layout_padding-bottom">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                  Mit nyújt még? <span>Választást</span>
                  </h2>
                </div>
                <p>
                Sok mindenbe van beleszólásunk, például, hogy milyen osztályprogramokat szeretnénk megvalósítani, vagy mivel töltsük a szabadidőnket az udvaron. Néhány dologban nem mi választunk, ám ez mégis lehetőség a számunkra. Például a hittan vagy erkölcstan oktatás esetében. Ja, és milyen speciális igényem van nekem? Mozgáskorlátozott vagyok, ezért nehezen tudom tartani a tempót a társaimmal, akik viszont mindig mellettem állnak, segítenek. Fantasztikus helye az iskolának a konduktív csoportszoba! Én gyakran vagyok itt, de az osztálytársaim is szívesen jönnek. Ha részletesebb bemutatásra lenne igény, ajánlom elolvasni Papp Eszter konduktor tanárnő bemutatkozó írását. Mert ez az, amiben mi egyediek vagyunk, ahogy az igazgatónő is idézte a Micimackóból a tanévnyitón: „Abban vagyunk egyediek, amiben különbözünk másoktól.”<br/><hr/>
                Az ide járó gyerekek nap, mint nap látják a mi nehézségeinket, és természetes számukra a jelenlétünk. Tudják mikor, miben segítsenek nekünk, ezáltal egymás felé is sokkal figyelmesebbé, türelmesebbé válnak. Már ezekből is látható, hogy MINDEN, amire egy mai iskolásnak szüksége van, az nálunk megtalálható: figyelem, türelem, érdeklődés, fejlődés, kalandok, kihívások…szeretem itt tölteni a napom egy részét! Még sok-sok dolgot tudnék megosztani az iskolánkról, de máris túl hosszúra sikerült a bemutatkozás. Szívből ajánlom minden iskolába készülőnek, vagy iskolát változtatni kényszerülőnek, hogy jöjjön el egyszer hozzánk, bármikor, de a legjobb, ha az „Aranykapu” programok közül választ, és lássa, hallja meg, hogy amit leírtam, az mind igaz.
                <br/>
                <br/>
                <br/>
                <p>
                  (Írta: egy képzeletbeli diák)
                </p>
                </p>
                
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Iskolánk <span>Története, mindennapjai</span>
            </h2>
          </div>
          <div className="client_container">
            <div className="carousel-wrap ">
              <div className="owl-carousel">
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      A második világháború után a Klebelsberg-féle népiskola működött a mai óvoda épületében, de oda csak alsó tagozatos tanulók jártak. A telep lakosságának és a gyermekek számának növekedésével szükség lett egy új, nagyobb létszámmal működő iskolára. Kecskés-telep oktatásának új fejezete kezdődött 1964-ben, amikor átadták a 8 tantermes „nagy iskola” épületét.<br/><hr/>
                      Az új iskola nevét az őt körülvevő telepről kapta: Ságvári - telepi Általános Iskola. Nyolc osztályban indult meg a tanítás. A tanulók több iskolából kerültek át az új intézménybe, melynek főbejárata még a Gera Sándor utca felől volt.
Maga a nevelőtestület a tanév elején alakult Pálmai Miklós igazgató úr vezetésével.<br/><hr/> A kor követelményeinek megfelelően élénk mozgalmi munka (kisdobos és úttörő) kezdődött, ami a későbbi igazgatók: Horváth József és Szalka Lajos idején is folytatódott, sok örömet szerezve a tanulóknak. A három férfi igazgató után 1986 őszén női igazgató került az iskola élére.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Konduktivitás
                        </h6>
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      1989-ben megszületett a döntés arról, hogy az iskola mozgássérült gyerekeket is fogad. Megalakult a mozgássérült csoport két fiatal konduktor munkájának köszönhetően.<br/> Ők voltak Gaálné Sós Rita és Sisák Erika. Ehhez a munkához helyszínül az akkori igazgatónő, Dr. Miklós Lászlóné, a korábban szolgálati lakásként működő földszinti termeket biztosította. Ettől az időtől kezdve egészen napjainkig folyik az iskolában az egészséges és a mozgásukban korlátozott tanulók együttes oktatása, nevelése.<br/><hr/> A sérült gyerekek integráltan vettek és vesznek részt a tanítási órákon. A csoportban kiváló konduktor irányítja, segíti a mozgásfejlődésüket, lelkiismeretes gyógypedagógiai asszisztensek nyújtanak segítséget ahhoz, hogy a mindennapjaik kellemesen teljenek az iskolában. Az intézmény rendelkezik egy kisbusszal, mely lehetővé teszi az iskolán kívüli programokon való részvételüket is.
<br/>Későbbi években Dr. Szil Elemérné pártfogásával befogadott az iskola hallássérült tanulókat is, akiket szurdopedagógus fejlesztett. Ők is integrált oktatást kaptak, hiszen az itt tanítók valamennyien szívügyüknek tekintették a siket kisgyerekek színvonalas oktatását és bevonásukat a diákok mindennapi életébe.Az egészséges tanulótársak pedig megtanulják, hogyan segítsenek, hogyan segíthetnek sérült társaiknak, ezáltal képessé válva a másság elfogadására.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-2.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Iskolánk neve
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      
1994-ben Tölgyessy Árpádné, Edit néni, magyar irodalom és nyelvtan szakos tanárnő javasolta, hogy az intézmény vegye fel Fekete István író nevét. Miután az író özvegye hozzájárult ehhez, az ünnepélyes névadóra az új iskola fennállásának harmincadik évfordulóján került sor.<br/><hr/> A születésnapi tortát, melyen már az új név szerepelt, Dr. Lippai Pál polgármester úr szelte fel. Ezek után iskolánk belépett az Ajkán működő Fekete István Társaság tagjai közé. A nagy író mellszobrát az emeleti zsibongóban helyezték el, és időről időre megkoszorúzták.<hr/><br/> A szobor 2014-ben új helyet kapott a jelenlegi főbejáratnál.
A névválasztásban egyrészt szerepe volt annak, hogy Fekete István műveiben jól tükröződnek azok az emberi értékek- becsületesség, hűség, kitartás, empátia, őszinteség -, amelyek a sikeres integrációval megvalósuló pedagógiai munka feltételei is, másrészt a kertvárosi környezet, az iskola természetközelisége összhangban van azzal az írói szándékkal, hogy gyermek- és állatszereplői olyan humánus magatartási példákat tárjanak elénk, melyek az élet tiszteletére tanítanak mindannyiunkat.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Bővítés
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      2003. augusztus 1-jétől egy tagintézménnyel bővült az iskola, a szentmihályi Gárdonyi Géza Általános Iskolával, mely végül 2008-ban bezárta kapuit, és a diákok, valamint a tantestület nagy része az anyaiskolába került.
<br/>A 90-es évektől kezdődően indult művészeti oktatás az iskolában, melynek keretén belül társastánc, néptánc, szolfézs, magánének és hangszeres képzést igényelhettek tanulóink. Ez a hagyomány napjainkban is folytatódik.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-2.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Érdemeink
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      2013 szeptemberétől Kispéterné Kotogán Erzsébet irányítása alá került az iskola. Folytatva a korábbi igazgatónő által megkezdett munkát, 2014. március 19-én az iskola elnyerte a „Minősített referenciaintézmény” címet, majd „Örökös Ökoiskola” lettünk. 
<br/><hr/>A helyi társadalommal való együttműködés keretében felépült iskolánk területén egy műfüves labdarugópálya, melyet nem csak az iskola, hanem a helyi közösségek is használhatnak.
<br/><hr/>2019-ig elnyerte iskolánk a „Boldog Iskola”, az „Akkreditált kiváló Tehetségpont” címet, valamint a „Pénziránytű-BankVelem Iskolahálózat” tagja lett. A 2021. tanévben iskolánk a „Kapocs iskolahálózat partnerintézménye”-ként elnyerte az „Élménysuli” címet is a Komplex Alapprogram bevezetése által.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Programok
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      Intézményünk nyugdíjba vonuló vezetőjét Sáriné Vetró Zsuzsanna váltotta fel, aki új lendülettel indította a 2022-2023-as tanévet. <br/><hr/>Számos új esemény került fel az éves programkínálatba, melyek reményeink szerint hagyománnyá is válnak: a F.É.K. projekt a mozgásukban akadályozott tanulóink integrációjáról szól; az évszakváltásokhoz kötődő Alkotónapok a gyermeki kreativitásra épülnek; a megújult formában életre hívott Szülő Klubfoglalkozások a családokkal való szorosabb együttműködést célozzák, ahol iskolapszichológusunk állandó jelenléte is emeli a program komolyságát.<br/><hr/> A beiskolázással, a továbbtanulással kapcsolatos eseményeket az Aranykapu Programsorozat fűzi egy komplex egységgé, melyben szerepel az óvodásoknak szóló játékos foglalkozás, ismerkedés; a negyedik osztályos szülőknek tartott tájékoztató előadás a felső tagozat kihívásairól; szülői értekezletek a leendő elsősöknek; valamint a környék középiskoláinak részvételével megrendezett, továbbtanulást elősegítő pályaválasztási nap is.<br/><hr/> A nyári vakáció idejére sem hagyjuk magukra tanulóinkat, hiszen idén első alkalommal csatlakozhatott iskolánk az Erdei Vándortábor programhoz. 
Természetesen hagyományainkat is megtartjuk: farsang, családi nap, alapítványi est gazdagítja a „baglyos iskola” mindennapjait.


                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-2.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                          Díjazottak
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      Legkiválóbb tanulóinkat minden évben megjutalmazzuk. A ballagáson adjuk át a Csillogó Szemekért Alapítvány által támogatott „Bagoly-díj”-at a 8 éven át kitűnő bizonyítvánnyal rendelkező diákoknak,<br/> valamint idén első alkalommal „Csillogó Csillag” elismerésben részesülnek azok is, akik ugyan nem voltak végig kitűnők, de közösségi munkájuk, lelkesedésük, eredményeik alapján példával jártak társaik előtt.

                      </p>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.png" alt="" className="img-1" />
                      </div>
                      <div className="name">
                        <h6>
                         60. Évforduló
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                      Iskolánk a 2024/2025-ös tanévben fogja ünnepelni alapításának 60. évfordulóját. Már most készülünk erre a jelentős tanévre, hiszen az ünneplés méltó, felemelő és vidám pillanatait tudatos tervezéssel-szervezéssel tudjuk megvalósítani.<br/><hr/> Ebben számítunk egykori diákjainkra, kollégáinkra és a jelenlegi közösségünkre is, melynek fontos részei a családok, Kecskéstelep lakói, intézményei is.<br/><hr/>
<br/><h3>Várjuk Önt is szeretettel iskolákba!</h3><br/>
Falábu László – könyvtáros pedagógus és Sáriné Vetró Zsuzsanna igazgató
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>



        </div>
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Üzenet</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Az üzenet sikeresen elküldve.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Bezár</button>
        
      </div>
    </div>
  </div>
</div>

        <div className="col-sm-2 sidenav position-static float-right">
          <div className="panel panel-default">
            <p>Fenntartónk</p>
          </div>
          <div className="panel panel-default">
            <a href="http://kk.gov.hu/szeged" target="_blank">
              <img className="img-fluid" src={TK} />
            </a>
          </div>
          <div className="panel panel-default">
            <img className="img-fluid" src={vuk} />
          </div>
          <div className="panel panel-default">
            <img className="img-fluid" src={tuskevar} />
          </div>
          <div className="panel panel-default">
            <p><a href="https://www.facebook.com/FIAISZ" target="_blank">Facebook</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About