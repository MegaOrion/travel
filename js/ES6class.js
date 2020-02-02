class Option {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    
    createDiv() {
      const div = document. createElement('div');
      document.body.appendChild(div);
      let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
      div.style.cssText = param;
      div.textContent = ",kf,kf,kf";
    }
  }
  
  let obj = new Option(300, 350, "red", 14, "center");
  
  obj.createDiv();