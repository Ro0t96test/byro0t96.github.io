var i, x = "";
obj = JSON.parse(text);
for (i = 0; i < obj.posts.length; i++) {
  x += '<li><blockquote id="longs" class="' + obj.posts[i].type + 
' blockquoteddrk"><span class="thumb-label ' + obj.posts[i].prix + 
'"><span class="thumb-label-position">' + obj.posts[i].prix + 
'</span></span><dt><a href="' + obj.posts[i].link + 
'"># ' + obj.posts[i].title + 
' <font style="font-size: 0;">' + obj.posts[i].searchw + 
'</font></a> <code>' + obj.posts[i].version + 
'</code> <input class="myImages" id="myImg" value="' + obj.posts[i].image + '" alt="' + obj.posts[i].title + '"size="1">' + 
'<i class="fa fa-eye eye"></i></dt><p class="size20">' + obj.posts[i].desc + 
'<br><br>Languages:';

for (m = 0; m < obj.posts[i].longs.length; m++) {
  x += '<acronym title="' + obj.posts[i].longs[m] + '">' + obj.posts[i].longs[m] + '</acronym> | ';
}

x += '</p></blockquote></li>';

}
document.getElementById("myUL").innerHTML = x;
