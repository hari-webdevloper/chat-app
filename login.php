<?php 
session_start();
if(isset($_SESSION['unique_id'])){
    header('location:users.php');
}
?>
<?php include_once 'header.php'?>

    <section class="form login">
    <header>Buddies Chat App</header>
    <form action="#">
        <div class= "error-txt"></div>
            <div class="field input">
                <label>Email Address</label>
                <input type="text" name="email" placeholder="Enter your email">
            </div>
            <div class="field input">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password ">
                <i class="fa-solid fa-eye"></i>
            </div>
            <div class="field button">
                <input type="submit" value="Continue to Chat">
            </div>
    </form>
    <div class="link">Not yet signed up? <a href="index.php">Signup Now</a></div>
    </section>
    </div>
    <script src="js/pass.show.hide.js"></script>
    <script src="js/login.js"></script>

</body>
</html>