class GetSet{
    private username;
    
    public set user(uname:string){
            this.username=uname;
    }
   public  get user():string{
        return this.username;
    }
    public checkUserName():string{
        
        if(this.username !="Bhaumik"){
                return "Invalid Username";
        }
        else{
                return "Valid Username";
        }
    }
}

var obj : GetSet;
obj = new GetSet;

