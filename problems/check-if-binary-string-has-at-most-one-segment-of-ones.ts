function checkOnesSegment(s: string): boolean {
    // const original = [...s]
    // const sorted   = [...s].sort().reverse()

    // return original.join('')==sorted.join('')

    const zero = s.indexOf('0')
    const one  = s.lastIndexOf('1')

    return zero == -1 || zero > one
};