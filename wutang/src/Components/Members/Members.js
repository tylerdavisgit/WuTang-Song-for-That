import React from "react";
import "./Members.scss";
import { Link } from "react-router-dom";

export default function Members() {
  return (
    <div id="members-page">
      <div id="members">
        <a
          href="https://en.wikipedia.org/wiki/RZA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>RZA</h2>
            <h3>THE LEADER</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637617/PROJECT%202/Wu-Tang%20Members%20Illustrations/RZA_toci0h.png"
              alt="rza"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/GZA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>GZA</h2>
            <h3>THE ELDER</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637616/PROJECT%202/Wu-Tang%20Members%20Illustrations/GZA_bbq8bh.png"
              alt="gza"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Ol%27_Dirty_Bastard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>OL DIRTY BASTARD</h2>
            <h3>THE ECCENTRIC</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637616/PROJECT%202/Wu-Tang%20Members%20Illustrations/OlDirtyBastard_hovwwl.png"
              alt="odb"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Method_Man"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>METHOD MAN</h2>
            <h3>YOUNG BLOOD</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637616/PROJECT%202/Wu-Tang%20Members%20Illustrations/Method_Man_wvk7c0.png"
              alt="Method Man"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Raekwon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>RAEKWON</h2>
            <h3>THE CHEF</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637617/PROJECT%202/Wu-Tang%20Members%20Illustrations/Raekwon_ly37vg.png"
              alt="Raekwon"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Ghostface_Killah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>GHOSTFACE KILLAH</h2>
            <h3>ABSTRACT</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637617/PROJECT%202/Wu-Tang%20Members%20Illustrations/GhostfaceKillah_wuvl9f.png"
              alt="GFK"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Inspectah_Deck"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>INSPECTAH DECK</h2>
            <h3>METAPHOR</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637617/PROJECT%202/Wu-Tang%20Members%20Illustrations/InspectahDeck_mva5sj.png"
              alt="Inspectah Deck"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/U-God"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>U-GOD</h2>
            <h3>LOW KEY</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637618/PROJECT%202/Wu-Tang%20Members%20Illustrations/U-God_nam0g7.png"
              alt="U-GOD"
            />
          </div>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Masta_Killa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="member-card">
            <h2>MASTA KILLA</h2>
            <h3>THE ORATOR</h3>
            <img
              src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593637616/PROJECT%202/Wu-Tang%20Members%20Illustrations/MastaKilla_mftnw6.png"
              alt="Masta Killa"
            />
          </div>
        </a>
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            HOME
          </Link>
        </button>
      </div>
    </div>
  );
}
