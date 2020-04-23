var i, x = "";
obj = JSON.parse(text);
for (i = 0; i < obj.posts.length; i++) {
  x += '<li><blockquote class="' + obj.posts[i].type + 
' blockquoteddrk"><span class="thumb-label ' + obj.posts[i].prix + 
'"><span class="thumb-label-position">' + obj.posts[i].prix + 
'</span></span><dt><a href="' + obj.posts[i].link + 
'"># ' + obj.posts[i].title + 
' <font style="font-size: 0;">' + obj.posts[i].searchw + 
'</font></a> <code>' + obj.posts[i].version + 
'</code> <img class="myImages" id="myImg" src="' + obj.posts[i].image + 
'" alt="' + obj.posts[i].title + 
'" width="30" height="30"><i class="fa fa-eye eye"></i></dt><p class="size20">' + obj.posts[i].desc + 
'<br>Languages:<acronym title="' + obj.posts[i].long1 + 
'">' + obj.posts[i].long1 + 
'</acronym></p></blockquote></li>';
}
document.getElementById("myUL").innerHTML = x;
