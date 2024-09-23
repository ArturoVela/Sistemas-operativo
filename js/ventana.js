<script>
  // Guarda el título original de la página
  var originalTitle = document.title;

  // Detecta cuando la página pierde o gana visibilidad
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      // Si la página no está visible, cambia el título
      document.title = "¡No te vayas!";
    } else {
      // Si la página vuelve a ser visible, restaura el título original
      document.title = originalTitle;
    }
  });
</script>
