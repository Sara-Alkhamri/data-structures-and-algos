//create a function that reverses a sring:
//'Hi My name is Andrei' should be:
//'ierdA si eman yM iH

function reverse(str) {
    //input check
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmmmm'
    }

    return str.split('').reverse().join()
}

//or

const reverse2 = str => str.split('').reverse().join('')

reverse2('Hi My name is Andrei')

reverse('Hi My name is Andrei')