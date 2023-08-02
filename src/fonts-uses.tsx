import React from "react";

export default function FontsUses({}) {
  return (
    <section className="fontsamples section">
      <div className="layout">
        <div className="layout-description">
          <h2>Use of primary typography</h2>
          <p>
            Attached is one example of using a brand font. This guideline does
            not bind the designer to make other types of typographical choices.
          </p>
        </div>
        <div className="layout-content">
          <div className="fontsample">
            <h5 className="">Rouna Medium</h5>
            <div className="h1 font-sample">Main headline</div>
          </div>

          <div className="fontsample">
            <h5 className="">Rouna Regular</h5>
            <div className="fontsample-h4">
              Introduction Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper
              quis, lacinia quis facilisis sed sapien.
            </div>
          </div>

          <div className="fontsample">
            <h5 className="">Rouna Regular</h5>
            <div className="p">
              Introduction Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper
              quis, lacinia quis facilisis sed sapien.
            </div>
          </div>

          <div className="fontsample">
            <h5 className="rounaregular">Rouna Bold</h5>
            <div className="">
              <b className="rounabold">Subheadline lorem ipsum</b>
              <br />
              Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec
              ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula
              ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem
              libero nec erat. Aliquam erat volutpat.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
