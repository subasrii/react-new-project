import React from 'react'
import 'bootstrap/dist/css/feed.css'

function Contactus() {
  return (
    <html>
    <link rel="stylesheet" type="text/css" href="css/feed.css"/>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
       
        <body>
      <div class="content">
         <div class="text">
            Contactus
         </div>
         <form action="feedsave" method="post">
            <label>username</label>
            <div class="field">
               <input type="text" id="username" name="username" placeholder="enter the name" required/>
               <span class="fas fa-user"></span>
            </div>
            <label>email</label>
            <div class="field">
               <input type="email" id="email" name="email"  required/>
               <span class="fas fa-user"></span>
            </div>

            <label>subject</label>
            <div class="field">
               <input type="text" id="subject" name="subject" placeholder="enter the subject" required/>
               <span class="fas fa-user"></span>
            </div>
            <label>message</label>
            <div class="field">
               <input type="text" id="message" name="message"required/>
               <span class="fas fa-user"></span>
            </div>
            <button>submit</button>
         </form>
      </div>
   </body>
</html>






  )
}

export default Contactus


