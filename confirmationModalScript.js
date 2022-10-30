function buildModal(contentId, callbackfunction) {
    const confirmationModal = document.createElement('div');
    confirmationModal.style.cssText = getOverlayCss();

    const mainModal = document.createElement('div');
    mainModal.classList.add('modal');
    mainModal.style.cssText = getModalCss();
    confirmationModal.appendChild(mainModal);
    
    const para = document.createElement('p');
    para.textContent = "Are you sure you want to continue?";
    mainModal.appendChild(para);

    const yesButton = document.createElement('button');
    yesButton.textContent = "Yes";
    yesButton.onclick = function() { SendSuccessConfirmation(confirmationModal, callbackfunction); };
    mainModal.appendChild(yesButton);
    
    const noButton = document.createElement('button');
    noButton.textContent = "No";
    noButton.onclick = function() { SendFailureConfirmation(confirmationModal, callbackfunction); };
    mainModal.appendChild(noButton);
    
    var content = document.getElementById(contentId);
    content.append(confirmationModal);
  }

  function SendSuccessConfirmation(confirmationModal, callbackfunction)
  {    
    confirmationModal.style.cssText = "display:none;";    
    callbackfunction(true);
  }

  function SendFailureConfirmation(confirmationModal, callbackfunction)
  {    
    confirmationModal.style.cssText = "display:none;";    
    callbackfunction(false);
  }

  function getModalCss()
  {
    var modal = '';    
    modal += "margin: 100px auto; padding: 200px; background: white; border: 1px solid #666;";
    modal += "width: 300px; border-radius: 6px;"; 
    // modal += "box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);";
    modal += " position: absolute;";
    modal += "display:block;";
    return modal;
  }

  function getOverlayCss()
  {
    var css = "";
    css += "top: 0px;";
    css += "opacity: .5; background: yellow; position: absolute;";
    css += "height: 100%; width: 100%;";
    css += "pointer-events: visible; display: block;" 
    css += "z-index: 1001;";
    return css;
  }