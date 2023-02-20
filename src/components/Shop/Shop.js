import React, { useState } from "react";
import "./Shop.css";
import printer1 from "../images/printer1.jpeg";
import printer2 from "../images/printer2.jpeg";
import printer3 from "../images/printer3.jpeg";
import printer4 from "../images/printer4.jpeg";
import printer5 from "../images/printer5.jpeg";
import printer6 from "../images/printer6.jpeg";
import printer7 from "../images/printer7.jpeg";
import printer8 from "../images/printer8.jpeg";

import brother1 from "../images/brother1.jpeg";
import brother2 from "../images/Brother2.jpeg";
import brother3 from "../images/Brother3.jpeg";
import brother4 from "../images/Brother4.jpeg";
import brother5 from "../images/Brother5.png";
import brother6 from "../images/Brother6.webp";
import brother7 from "../images/Brother7.jpeg";
import brother8 from "../images/Brother8.jpeg";

import Checkout from "../Checkout/Checkout";

const Shop = () => {
  const [active, setActive] = useState(" ");
  if (active === "FirstCard") {
    return (
      <Checkout
        paragraph="Envy Pro 6475 Wireless All In One Inkjet Printer with 2 years of HP Instant Ink – White"
        prize="$259.99"
      />
    );
  } 
  else if(active === "SecondCard"){
    return (
      <Checkout
        paragraph="HP – DeskJet 2724 Wireless All-In-One Instant Ink Ready Inkjet Printer – White & Sage"
        prize="$75.99"
      />
    );
  }
  else if(active === "ThirdCard"){
    return (
      <Checkout
        paragraph="HP – DeskJet Plus 4155 Wireless All-In-One Instant Ink-Ready Inkjet Printer – White"
        prize="$105.99"
      />
    );
  }
  else if(active === "FourthCard"){
    return (
      <Checkout
        paragraph="HP – ENVY Photo 7155 Wireless All-In-One Instant Ink Ready Inkjet Printer – Black"
        prize="$185.99"
      />
    );
  }
  else if(active === "FifthCard"){
    return (
      <Checkout
        paragraph="HP – OfficeJet Pro 9025 Wireless All-In-One Instant Ink Ready Inkjet Printer – Gray"
        prize="$339.99"
      />
    );
  }
  else if(active === "SixthCard"){
    return (
      <Checkout
        paragraph="HP – Smart Tank Plus 651 Wireless All-In-One Inkjet Printer"
        prize="$415.99"
      />
    );
  }
  else if(active === "SeventhCard"){
    return (
      <Checkout
        paragraph="HP – OfficeJet 200 Mobile Inkjet Printer – Black"
        prize="$305.99"
      />
    );
  }
  else if(active === "EigthCard"){
    return (
      <Checkout
        paragraph="HP – LaserJet Pro M15w Laser Printer – White"
        prize="$109.99"
      />
    );
  }
  else if(active === "ninthCard"){
    return (
      <Checkout
        paragraph="Brother MFC-L2710DW Wireless Compact Monochrome Laser All-in-One Printer"
        prize="$319.99"
      />
    );
  }
  else if(active === "tenthCard"){
    return (
      <Checkout
        paragraph="Brother MFC7240 Compact Laser All-in-One"
        prize="$219.99"
      />
    );
  }
  else if(active === "eleventhCard"){
    return (
      <Checkout
        paragraph="Brother – HL-L3270CDW Wireless Color Laser Printer – White"
        prize="$251.99"
      />
    );
  }
  else if(active === "twelfthCard"){
    return (
      <Checkout
        paragraph="Brother – INKvestment Tank MFC-J995DW Wireless All-In-One Inkjet Printer – White"
        prize="$210.99"
      />
    );
  }
  else if(active === "thirteenthCard"){
    return (
      <Checkout
        paragraph="Brother – INKvestment Tank MFC-J805DW Wireless All-In-One Inkjet Printer – White"
        prize="$169.99"
      />
    );
  }
  else if(active === "fourteenthCard"){
    return (
      <Checkout
        paragraph="Brother HL-L2300d Compact, Personal, Monochrome Laser Printer, Duplex Printing"
        prize="$199.99"
      />
    );
  }
  else if(active === "fifteenthCard"){
    return (
      <Checkout
        paragraph="Brother – MFC-L8900CDW Wireless Color All-in-One Laser Printer White"
        prize="$535.99"
      />
    );
  }
  else if(active === "sixteenthCard"){
    return (
      <Checkout
        paragraph="Brother HL-L2325DW Monochrome Wireless Laser Printer"
        prize="$185.49"
      />
    );
  }

  else {
    return (
      <div className="shopSection">
        <div className="aboutUsBanner">
          <h1>Shop</h1>
          <h4>
            <a href="/">Home</a> &gt; Shop
          </h4>
        </div>
        <div className="HpPrinters">
        {/* first card */}
          <h1>HP Printers</h1>
          <div className="firstRowHpPrinters">
            <div className="HpPrinters1" onClick={() => setActive("FirstCard")}>
              <img
                src={printer1}
                alt="Not Found"
                className="HpPrinters1Image"
              />
              <div className="HpPrinters1Paragraph">
                Envy Pro 6475 Wireless All In One Inkjet Printer with 2 years of
                HP Instant Ink – White
              </div>
              <div className="HpPrinters1prize">$259.99</div>
            </div>
{/* second card */}
              <div className="HpPrinters1" onClick={() => setActive("SecondCard")}>
                <img
                  src={printer2}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – DeskJet 2724 Wireless All-In-One Instant Ink Ready Inkjet
                  Printer – White & Sage
                </div>
                <div className="HpPrinters1prize">$75.99</div>
              </div>
            {/* Third Card*/}
              <div className="HpPrinters1" onClick={() => setActive("ThirdCard")} >
                <img
                  src={printer3}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – DeskJet Plus 4155 Wireless All-In-One Instant Ink-Ready
                  Inkjet Printer – White
                </div>
                <div className="HpPrinters1prize">$105.99</div>
              </div>

{/* Fourth Card */}
              <div className="HpPrinters1" onClick={() => setActive("FourthCard")} >
                <img
                  src={printer4}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – ENVY Photo 7155 Wireless All-In-One Instant Ink Ready
                  Inkjet Printer – Black
                </div>
                <div className="HpPrinters1prize">$185.99</div>
              </div>
          </div>

{/* fifth card */}

          <div className="firstRowHpPrinters" >
              <div className="HpPrinters1" onClick={() => setActive("FifthCard")}>
                <img
                  src={printer5}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – OfficeJet Pro 9025 Wireless All-In-One Instant Ink Ready
                  Inkjet Printer – Gray
                </div>
                <div className="HpPrinters1prize">$339.99</div>
              </div>

{/* sixth card */}
              <div className="HpPrinters1" onClick={() => setActive("SixthCard")}>
                <img
                  src={printer6}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – Smart Tank Plus 651 Wireless All-In-One Inkjet Printer
                </div>
                <div className="HpPrinters1prize">$415.99</div>
              </div>

{/* seventh card */}
              <div className="HpPrinters1" onClick={() => setActive("SeventhCard")}>
                <img
                  src={printer7}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                HP – OfficeJet 200 Mobile Inkjet Printer – Black
                </div>
                <div className="HpPrinters1prize">$305.99</div>
              </div>

{/* eigth card */}
              <div className="HpPrinters1"  onClick={() => setActive("EigthCard")}>
                <img
                  src={printer8}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  HP – LaserJet Pro M15w Laser Printer – White
                </div>
                <div className="HpPrinters1prize">$109.99</div>
              </div>

          </div>
        </div>
        {/* brother printers two rows */}

        <div className="HpPrinters">
          <h1>Brother Printers</h1>
          <div className="firstRowHpPrinters" >
              <div className="HpPrinters1" onClick={() => setActive("ninthCard")}>
                <img
                  src={brother5}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother MFC-L2710DW Wireless Compact Monochrome Laser
                  All-in-One Printer
                </div>
                <div className="HpPrinters1prize">$319.99</div>
              </div>

              <div className="HpPrinters1" onClick={() => setActive("tenthCard")}>
                <img
                  src={brother6}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother MFC7240 Compact Laser All-in-One
                </div>
                <div className="HpPrinters1prize">$219.99</div>
              </div>

              <div className="HpPrinters1" onClick={() => setActive("eleventhCard")}>
                <img
                  src={brother7}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother – HL-L3270CDW Wireless Color Laser Printer – White
                </div>
                <div className="HpPrinters1prize">$251.99</div>
              </div>

              <div className="HpPrinters1" onClick={() => setActive("twelfthCard")}>
                <img
                  src={brother8}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother – INKvestment Tank MFC-J995DW Wireless All-In-One
                  Inkjet Printer – White
                </div>
                <div className="HpPrinters1prize">$210.99</div>
              </div>
          </div>

          <div className="firstRowHpPrinters">
              <div className="HpPrinters1" onClick={() => setActive("thirteenthCard")}>
                <img
                  src={brother1}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother – INKvestment Tank MFC-J805DW Wireless All-In-One
                  Inkjet Printer – White
                </div>
                <div className="HpPrinters1prize">$169.99</div>
              </div>


              <div className="HpPrinters1" onClick={() => setActive("fourteenthCard")}>
                <img
                  src={brother2}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother HL-L2300d Compact, Personal, Monochrome Laser Printer,
                  Duplex Printing
                </div>
                <div className="HpPrinters1prize">$199.99</div>
              </div>

              <div className="HpPrinters1" onClick={() => setActive("fifteenthCard")}>
                <img
                  src={brother3}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother – MFC-L8900CDW Wireless Color All-in-One Laser Printer
                  – White
                </div>
                <div className="HpPrinters1prize">$535.99</div>
              </div>

              <div className="HpPrinters1" onClick={() => setActive("sixteenthCard")}>
                <img
                  src={brother4}
                  alt="Not Found"
                  className="HpPrinters1Image"
                />
                <div className="HpPrinters1Paragraph">
                  Brother HL-L2325DW Monochrome Wireless Laser Printer
                </div>
                <div className="HpPrinters1prize">$185.49</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Shop;
