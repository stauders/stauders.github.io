var osziLength =100,osziLengthButton,osziLengthInput;

var time=0,period,vPhase=3;

var vPhaseInput, vPhaseButton;
var cnv,timeSteps=0.02;
var yOffset,xOffset;
var deltaT;
var displayTime;
var pause=false,pauseButton;
var resetButton;
var firstWave,secondWave,sumWave;

function WaveControl() {
    this.waveLength
    this.oszilators = [osziLength];
    this.waveLengthInput; 
    this.yOffset;
    this.waveLengthButton;
    this.Amplitude;
    this.amplitudeInput;
    this.amplitudeButton;
  }

function init(){
    firstWave = new WaveControl();
    secondWave = new WaveControl();
    sumWave = new WaveControl();
    sumWave.yOffset =130*3
    firstWave.Amplitude = 60;
    firstWave.yOffset =130;
    secondWave.yOffset = 130*5;
    firstWave.waveLength= 3 ;
    secondWave.waveLength= 3 ;
    secondWave.Amplitude = 60;
    //FirstWave Setup
    firstWave.amplitudeInput = select("#Amplitude");
    firstWave.amplitudeButton = select("#AmplitudeButton");
    firstWave.waveLengthInput = select("#waveLength");
    firstWave.waveLengthButton = select("#waveLengthButton");
    firstWave.waveLengthButton.mousePressed(waveLengthChanged);
    firstWave.amplitudeInput.value(firstWave.Amplitude);
    firstWave.amplitudeButton.mousePressed(AmplitudeChanged);
    firstWave.waveLengthInput.value(firstWave.waveLength);
    //secondWave Setup
    secondWave.amplitudeInput = select("#Amplitude2");
    secondWave.amplitudeButton = select("#AmplitudeButton2");
    secondWave.waveLengthInput = select("#waveLength2");
    secondWave.waveLengthButton = select("#waveLengthButton2");
    secondWave.waveLengthButton.mousePressed(waveLengthChanged);
    secondWave.amplitudeInput.value(firstWave.Amplitude);
    secondWave.amplitudeButton.mousePressed(AmplitudeChanged);
    secondWave.waveLengthInput.value(firstWave.waveLength);
    pauseButton = select("#pauseButton");
    pauseButton.mousePressed(pauseButtonPressed);
    deltaT = select("#deltaT");
    deltaT.changed(DeltaTChanged);
    cnv.center("horizontal");
    displayTime = select("#displayTime");
    resetButton = select("#resetButton");
    resetButton.mousePressed(resetButtonPressed);
    osziLengthButton = select("#osziLengthButton");
    osziLengthInput = select("#osziLength");
    osziLengthInput.value(osziLength);
    osziLengthButton.mousePressed(osziLengthChanged);
    vPhaseButton= select("#vPhaseButton");
    vPhaseInput = select("#vPhase");
    vPhaseInput.value(vPhase);
    vPhaseButton.mousePressed(vPhaseChanged);
    xOffset = width/osziLength;
}