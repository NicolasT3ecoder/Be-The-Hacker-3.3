 javascript:
document.write('<!DOCTYPE html>');
  document.write('<html>');
  document.write('<body>');
  document.write('	<h1></h1>');
  document.write('	<button onclick="save()">Hack this website?</button>');
  document.write('	<p id="msg"></p>');
  document.write('	');
  document.write('	<script>');
  document.write('		function save(){	 ');
  document.write('		  var userPreference;');
  document.write('');
  document.write('			if (confirm("Do you want to Auto-Hack this site?") == true) {');
  document.write('				userPreference = "Website will start to be destroyed in a couple minutes!";');
  document.write('			} else {');
  document.write('				userPreference = "Hack canceld";');
  document.write('			}');
  document.write('');
  document.write('			document.getElementById("msg").innerHTML = userPreference; ');
  document.write('		}');
  document.write('    </script>');
  document.write('</body>');
  document.write('</html>');
  document.write('<div id="timer"></div>');
  document.write('<p></p>');
  document.write('<textarea id="textarea" rows="1" cols="18" placeholder="Website name here!">');
  document.write('</textarea>`');


