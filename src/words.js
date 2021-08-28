var programmingLanguages = [
    'python', 
    'java', 
    'javaScript', 
    'php', 
    'c', 
    'cobol', 
    'perl', 
    'pascal', 
    'lisp', 
    'fortran',
    'angular',
    'react',
    'node',
    'mysql',
    'mongo'
]

export function randomWord() {
    return programmingLanguages[Math.floor(Math.random()*programmingLanguages.length)]
}