export function Preloader() {
  return (
    <div id="preloader" className="preloader">
      <div className="pl-word-stage" id="pl-word-stage">
        <div className="pl-word-wrap">
          <div className="pl-word" id="pl-w1">
            BUILD
          </div>
        </div>
      </div>

      <div className="pl-identity" id="pl-identity">
        <div className="pl-id-name">
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">N</span>
          </div>
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">I</span>
          </div>
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">T</span>
          </div>
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">H</span>
          </div>
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">I</span>
          </div>
          <div className="pl-id-char-wrap">
            <span className="pl-id-char">N</span>
          </div>
        </div>

        <div className="pl-id-rule"></div>

        <div className="pl-id-sub">
          <span className="pl-id-sub-inner">Creative Developer · 2026</span>
        </div>
      </div>
    </div>
  );
}
