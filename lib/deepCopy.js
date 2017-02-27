/**
 * Created by a_wav on 2017/2/27.
 */

function visit(p, copy_p){
    for(var m in p){
        if(p.hasOwnProperty(m)){
            if(typeof p[m] === 'object'){
                if(p[m] === p){
                    copy_p[m] = copy_p; // prevent loop
                }else{
                    copy_p[m] = {};
                }

            }else{
                copy_p[m] = p[m];
            }
        }
    }
}

function deepCopy(p, copy_p){

    if(typeof p === 'object'){
        visit(p,copy_p);

        for(var m in p){
            if(p.hasOwnProperty(m) && typeof p[m] === 'object' && p[m] !== p){
                deepCopy(p[m], copy_p[m]);
            }
        }
    }

}

module.exports = deepCopy;