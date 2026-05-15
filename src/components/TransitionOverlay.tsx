export function TransitionOverlay() {
  return (
    <div id="transition-overlay" className="transition-overlay">
      <svg className="overlay-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="overlay__path"
          d="M 0 100 V 100 C 33 100 66 100 100 100 V 100 z"
        />
      </svg>

      <div className="transition-stage">
        <div className="ts-identity">
          <div className="ts-line ts-line--dest">
            <span className="ts-word ts-dest-label">Works</span>
          </div>
          <div className="ts-rule"></div>
        </div>
      </div>
    </div>
  );
}
