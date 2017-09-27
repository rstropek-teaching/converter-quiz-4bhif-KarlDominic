var args = process.argv;

if(args[4]==='to'&& args.length == 6){
    switch(args[3]){
        case 'mm': process.stdout.write(args[2]+' mm are '+convertLength(1, args[5])+' '+args[5]+'\n'); break;
        case 'cm': process.stdout.write(args[2]+' cm are '+convertLength(10, args[5])+' '+args[5])+'\n'; break;
        case 'dm': process.stdout.write(args[2]+' dm are '+convertLength(100, args[5])+' '+args[5]+'\n'); break;
        case 'm': process.stdout.write(args[2]+' m are '+convertLength(1000, args[5])+' '+args[5]+'\n'); break;
        case 'km': process.stdout.write(args[2]+' km are '+convertLength(1000000, args[5])+' '+args[5]+'\n'); break;
        case 'g':  process.stdout.write(args[2]+' g are '+convertWeight(1, args[5])+' '+args[5]+'\n');break;
        case 'dag': process.stdout.write(args[2]+' dag are '+convertWeight(10, args[5])+' '+args[5]+'\n'); break;
        case 'kg': process.stdout.write(args[2]+' kg are '+convertWeight(1000, args[5])+' '+args[5]+'\n');break;
        default: process.stdout.write('Invalid parameters\n');break;
    }
}else{
    process.stdout.write('Invalid parameters\n');
}



function convertLength(from, into){
    
    switch(into){
        case 'mm': if(isNaN(args[2]*from/1)){
            process.stdout.write('Invalid parameters\n');process.exit(1);
        }
        return args[2]*from/1;

        case 'cm': if(isNaN(args[2]*from/100)){
            process.stdout.write('Invalid parameters\n');process.exit(1);
        }
        return args[2]*from/10;

        case 'dm': if(isNaN(args[2]*from/100)){
            process.stdout.write('Invalid parameters\n');process.exit(1);
        }
        return args[2]*from/100;

        case 'm': if(isNaN(args[2]*from /1000)){
            process.stdout.write('Invalid parameters\n');process.exit(1);
        }
        return args[2]*from /1000;

        case 'km': if(isNaN(args[2]*from/1000000)){
            process.stdout.write('Invalid parameters\n');process.exit(1);
        }
        return args[2]*from/1000000;
        default: process.stdout.write('Invalid parameters\n');process.exit(1);
    }
}

function convertWeight(from, into){
    switch(into){
        case 'g': return args[2]*from/1;
        case 'dag': return args[2]*from/10;
        case 'kg': return args[2]*from/1000;
        default: process.stdout.write('Invalid parameters\n');
        process.exit(1);
    }
}