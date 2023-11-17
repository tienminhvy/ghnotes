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
      synthControl.load(audioPlayer, CursorControl, controlOptions);
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

  function CursorControl(rootSelector) {
    var self = this;

    console.log(self);

  // This demonstrates two methods of indicating where the music is.
      // 1) An element is created that is moved along for each note.
      // 2) The currently being played note is given a class so that it can be transformed.
      self.cursor = null; // This is the svg element that will move with the music.
      self.rootSelector = rootSelector; // This is the same selector as the renderAbc call uses.

    console.log(self.rootSelector);
      self.onStart = function() {
        console.log(self.rootSelector);
          // This is called when the timer starts so we know the svg has been drawn by now.
          // Create the cursor and add it to the sheet music's svg.
          var svg = self.rootSelector.querySelector("svg");
          self.cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
          self.cursor.setAttribute("class", "abcjs-cursor");
          self.cursor.setAttributeNS(null, 'x1', 0);
          self.cursor.setAttributeNS(null, 'y1', 0);
          self.cursor.setAttributeNS(null, 'x2', 0);
          self.cursor.setAttributeNS(null, 'y2', 0);
          svg.appendChild(self.cursor);
      };
  
      self.removeSelection = function() {
          // Unselect any previously selected notes.
          var lastSelection = self.rootSelector.querySelectorAll(".abcjs-highlight");
          for (var k = 0; k < lastSelection.length; k++)
              lastSelection[k].classList.remove("abcjs-highlight");
      };
  
  
      self.onEvent = function(ev) {
  
          // This is called every time a note or a rest is reached and contains the coordinates of it.
          if (ev.measureStart && ev.left === null)
              return; // this was the second part of a tie across a measure line. Just ignore it.
  
          self.removeSelection();
  
          // Select the currently selected notes.
          for (var i = 0; i < ev.elements.length; i++ ) {
              var note = ev.elements[i];
              for (var j = 0; j < note.length; j++) {
                  note[j].classList.add("abcjs-highlight");
              }
          }
  
          // Move the cursor to the location of the current note.
          if (self.cursor) {
              self.cursor.setAttribute("x1", ev.left - 2);
              self.cursor.setAttribute("x2", ev.left - 2);
              self.cursor.setAttribute("y1", ev.top);
              self.cursor.setAttribute("y2", ev.top + ev.height);
          }
  
      
      
      };
      self.onFinished = function() {
              self.removeSelection();
  
          if (self.cursor) {
              self.cursor.setAttribute("x1", 0);
              self.cursor.setAttribute("x2", 0);
              self.cursor.setAttribute("y1", 0);
              self.cursor.setAttribute("y2", 0);
          }
  
      
      };
  }
});
