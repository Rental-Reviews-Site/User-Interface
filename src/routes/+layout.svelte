<script>
  import "$lib/main.scss";
</script>

<header class="site-header">
  <div class="site-logo">
    <a href="/">LOGO</a>
  </div>
  <nav class="nav">
    <a href="/share">share</a>
    <a href="/contact">contact</a>
    <a href="/login">login</a>
  </nav>
</header>
<slot />
<footer class="site-footer">
  <p>little footer</p>
</footer>
