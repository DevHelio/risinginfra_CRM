<script>
</script>

<div class="loginPageWrapper">
  <div class="main">
    <h1>Rising infratechniek</h1>
    <h3>Login</h3>
    <form method="POST">
      <label for="first"></label>
      <input
        type="email"
        id="first"
        name="email"
        autocomplete="on"
        placeholder="email@voorbeeld.com"
        required
      />

      <label for="password"> </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your Password"
        required
      />

      <div class="wrap">
        <button type="submit">Login</button>
      </div>
    </form>
    <p>
      Not registered?
      <a href="?"> Create an account </a>
    </p>
  </div>
</div>

<style>
  .loginPageWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    background: #f3f3f3;
    flex-direction: column;
    margin: 0;
  }

  .main {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    transition: transform 0.2s;
    width: 500px;
    text-align: center;
  }

  h1 {
    color: #fcc236;
  }

  label {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
    color: #555;
    font-weight: bold;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #fcc236;
    width: 100%;
    font-size: 16px;
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
