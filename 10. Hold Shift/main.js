var checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
var lastChecked;

function handleCheck(e){
	var inside = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox == this || checkbox == lastChecked) {
				inside = !inside;
				console.log('inside')
			}
			if (inside) {
        checkbox.checked = true;
      };
		});		
	};
	lastChecked = this;
};
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));