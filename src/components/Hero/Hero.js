import "./Hero.css";
import React from "react";
import bannerImage from "../images/bannerImage.jpg";
import headphone from "../images/headphone.jpg";
import settings from "../images/settings.png";
import downloads from "../images/downloads.png";
import printerConnect from "../images/printerConnect.png";
import downloadsSecond from "../images/downloadsSecond.png";
import printer1 from "../images/printer1.jpeg";
import printer2 from "../images/printer2.jpeg";
import printer3 from "../images/printer3.jpeg";
import printer4 from "../images/printer4.jpeg";
import printer5 from "../images/printer5.jpeg";
import printer6 from "../images/printer6.jpeg";
import printer7 from "../images/printer7.jpeg";
import printer8 from "../images/printer8.jpeg";
const Hero = () => {
  return (
    <>
      <div className="heroSection">
        {/* first image section */}
        <img src={bannerImage} className="HeroImage" alt="" />
        {/* section section */}
        <div className="instantSupport">
          <h1 className="instantSupportHeading">
            Instant Support on Printer Installation
          </h1>
          <div className="iSFirstSection">
            <div className="chatSupport">
              <img
                src={headphone}
                className="chatSupportImage"
                alt="Not Found"
              />
              <h3 className="chatSupportHeading">Online Chat Support</h3>
            </div>
            <div className="settings">
              <img src={settings} className="settingsImage" alt="Not Found" />
              <h3 className="settingsHeading">Setup & Install</h3>
            </div>
            <div className="downloads">
              <img src={downloads} className="downloadsImage" alt="Not Found" />
              <h3 className="downloadsHeading">Printer Drivers & Software</h3>
            </div>
          </div>
          <div className="iSSecondSection">
            <div className="secondSectionFirstCard">
              <img
                src={printerConnect}
                className="printerConnectImage"
                alt="Not Found"
              />
              <h2 className="printerConnectHeading">
                Connect Printer through wire or Wireless
              </h2>
              <p className="printerConnectParagraph">
                A wireless printer can be used by many different devices through
                network. If you have a Wi-Fi or traditional (wired) network
                printer, you can directly connect it to the network. But if the
                printer isn’t network-enabled, you can add it as a local printer
                and share it on your network. We will teach you how to add a
                network printer on Windows or macOS, as well as how to share a
                local printer with your network.
              </p>
            </div>
            <div className="secondSectionSecondCard">
              <img
                src={downloadsSecond}
                className="printerConnectImage"
                alt="Not Found"
              />
              <h2 className="printerConnectHeading">
                Support for the Driver Download & Installation
              </h2>
              <p className="printerConnectParagraph">
                A Printer driver is a piece of software designed to help your
                printer communicate with your mobile device or computer. We
                allow your HP Printer, to talk directly with your device. This
                allows the machinery to understand data sent from a device (such
                as a picture you want to print or a document you want to scan),
                and perform the necessary actions. Think of your HP printer
                driver as the translator who helps your technology to
                communicate more effectively.
              </p>
            </div>
          </div>
        </div>
        {/* hp printers two rows */}
        <div className="HpPrinters">
          <h1>HP Printers</h1>
          <div className="firstRowHpPrinters">
            <div className="HpPrinters1">
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

            <div className="HpPrinters1">
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

            <div className="HpPrinters1">
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
            <div className="HpPrinters1">
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
          <div className="firstRowHpPrinters">
            <div className="HpPrinters1">
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

            <div className="HpPrinters1">
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

            <div className="HpPrinters1">
              <img
                src={printer7}
                alt="Not Found"
                className="HpPrinters1Image"
              />
              <div className="HpPrinters1Paragraph">
                HP – Smart Tank Plus 651 Wireless All-In-One Inkjet Printer
              </div>
              <div className="HpPrinters1prize">$415.99</div>
            </div>
            <div className="HpPrinters1">
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

        
      </div>
    </>
  );
};

export default Hero;
