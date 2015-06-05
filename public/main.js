var terminal = new Terminal();
    var video = document.getElementById('bgvid');

    $('#term').append(terminal.html)
    
    function starter(){
        terminal.input("Sup, who's this?",function(input){
            return handler(input);
        })
    }
    function neutral(){
        terminal.input("",function(input){
            neutral();
        })
    }
    $(".terminal").css({ opacity: 0.5 });
    function emailsignup(name){
        terminal.input(name+", What's your email?",function(input){
            if(input.search("@") == -1){
                terminal.print('whatever, right.');
                neutral();
            }
            else{
                /*
                    THIS NEEDS TO WRITE TO MY API
                    ROLL OUT AN API SETUP THE SAME WAY AS MY OTHER ONE IS
                */
                
                terminal.print("Cool, I will get back to you");
                neutral();
            }
        });
    }
    
    function handler(input){
        var c = 0;
        setTimeout(function(){
            terminal.input('Sup '+input+", I'm working on shit right now, want me to hit you up when I'm done? [y/n]",function(resp){
                if(resp == 'yes' || resp == 'y'){
                    emailsignup(input);
                }
                else{
                    terminal.print("Ok, have a good one");
                    neutral();
                }
            })
        },c+=3000)
    }
    video.addEventListener('loadeddata', function() {
        var c = 0;
        setTimeout(function(){
            starter();
        },c+=1000)
        
    }, false);