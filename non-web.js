class app {
    main() {
        console.log("This is demo input.");
    }
    basicInfo(input) {
        console.log("===============================");
        console.log(input);
        console.log("===============================");
    }
    run() {
        this.basicInfo("Running Program..");
        
        console.log("Main Function:");
        this.main();
    
        this.basicInfo("Finished Working.");    
    }
}

export {app};