<!-- LOCAL INFORMATION -->
        <!-- <div class="col-sm-6">
            <div class="well">
                <h3><span class="fa fa-user"></span> Local</h3>

                <% if (user.local.email) { %>
                    <p>
                        <strong>id</strong>: <%= user._id %><br>
                        <strong>email</strong>: <%= user.local.email %><br>
                        <strong>password</strong>: <%= user.local.password %>
                    </p>

                    <a href="/unlink/local" class="btn btn-default">Unlink</a>
                <% } else { %>
                    <a href="/connect/local" class="btn btn-default">Connect Local</a>
                <% } %>

            </div>
        </div> -->


         <!-- <div class="col-sm-6">
          <h3>Saved Playlists</h3> -->
          <!-- <ul class="messages">
          <% for(var i=0; i<messages.length; i++) {%>
            <li class="message">
              <span><%= messages[i].name %></span>
              <span><%= messages[i].msg %></span>
              <span><%= messages[i].thumbUp %></span>
              <span><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
              <span><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
              <span><i class="fa fa-trash" aria-hidden="true"></i></span>
            </li>
          <% } %>
          </ul>

          <h2>Add a message</h2>
        <% if (user.local.email) { %>
          <form action="/messages" method="POST">
            <input type="text" value="<%= user.local.email %>" name="name">
            <input type="text" placeholder="message" name="msg">
            <button type="submit">Submit</button>
          </form>
        </div>
        <% } %> -->


        deleted fo loop
        <% for(var i=0; i<audioFiles.length; i++) {%>
          <li class="audio">
            <span><%= audioFiles[i].title %></span>
            <span><%= audioFiles[i].type %></span>
            <audio controls="controls" autobuffer="autobuffer">
                <source src="data:audio/wav;base64,<%=audioFiles[i].audioData.toString('base64')%>" />
            </audio>
            <span><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
            <span><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
            <span><i class="fa fa-trash" aria-hidden="true"></i></span>
            
          </li>
        <% } %>
    


    <span class="share">Share Your Playlists</span>
    <a href="/player/<%=user._id%>"><span id="playlistUrl"></span></a>