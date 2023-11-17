document.addEventListener("DOMContentLoaded", (event) => {
  let abcCodeBlocks = document.querySelectorAll('.language-abc');

  abcCodeBlocks.forEach(abcE => {
    const abcString = abcE.innerText;
    const musicSheet = document.createElement("div");
    const visualObj = ABCJS.renderAbc(musicSheet, abcString);
    const audioPlayer = document.createElement("div");
    abcE.parentElement.insertAdjacentElement("afterend", musicSheet);
    musicSheet.insertAdjacentElement("afterend", audioPlayer);
    if (ABCJS.synth.supportsAudio()) {
      let controlOptions = {
          displayRestart: true,
          displayPlay: true,
          displayProgress: true,
          displayClock: true,
          displayWarp: true,
          displayLoop: true
      };

      const synthControl = new ABCJS.synth.SynthController();
      synthControl.load(audioPlayer, null, controlOptions);
      synthControl.disable(true);
      const midiBuffer = new ABCJS.synth.CreateSynth();
      midiBuffer.init({
          visualObj: visualObj[0],
          options: {
              
          }

      }).then(function () {
          synthControl.setTune(visualObj[0], true).then(function (response) {
          audioPlayer.querySelector(".abcjs-inline-audio").classList.remove("disabled");
          })
      });
    } else {
      // audio not supported
    }
    abcE.remove();
    musicSheet.style.overflow = "visible";
  })
});
