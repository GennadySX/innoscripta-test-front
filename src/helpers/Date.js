/**
 * Created by GennadySX on @2020
 */

const fixer = (date) => date < 10 ? `0${date}`: date

export const fullDate = (date) => {
    const is = new Date(date)

    return `${fixer(is.getDate())}.${fixer(is.getMonth()+1)}.${is.getFullYear()}   ${fixer(is.getHours())}:${fixer(is.getMinutes())} `

}


