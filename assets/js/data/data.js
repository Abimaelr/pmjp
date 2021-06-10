const classList = [{
    name: 'g_agenda',
    title: 'Google Agenda',
},
{
    name: 'classroom',
    title: 'Google Classroom',
},
{
    name: 'g_drive',
    title: 'Google Drive',
},
{
    name: 'gmail',
    title: 'Gmail',
},
{
    name: 'forms',
    title: 'Google Forms',
},
{
    name: 'meet',
    title: 'Google Meet',
},]

const tutoriais = [
    {
        titulo: 'Google Agenda',
        sub: 'Acessando a Agenda',
        source: 'https://drive.google.com/file/d/1-rxUeNEZFWnmMRa-5f8vPt392KXYESdI/view',
        icon: 'assets/img/pmjp_icons/calendar.png',
        className: 'g_agenda',
    },
    {
        titulo: 'Google Agenda',
        sub: 'Criando eventos',
        source: 'https://drive.google.com/file/d/13b-LOEVTQzCDte5Yh2q5yWvq_RR0Kee_/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/calendar.png',
        className: 'g_agenda',
    },
    {
        titulo: 'Google Agenda',
        sub: 'Criando Tarefas',
        source: 'https://drive.google.com/file/d/1TIb2YpSMVG5Uecrbm3X2MkvYspyn9zpG/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/calendar.png',
        className: 'g_agenda',
    },
    {
        titulo: 'Google Agenda',
        sub: 'Criando Lembretes',
        source: 'https://drive.google.com/file/d/1--eRvKqj0DqSZj9i4uH2Zdt6_XLDuwJm/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/calendar.png',
        className: 'g_agenda',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Criando Sala',
        source: 'https://drive.google.com/file/d/1AQPvTGkfBhvmD9tYqvq_DIIXk5cWZVmh/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Inserindo avisos',
        source: 'https://drive.google.com/file/d/1wjRY6SfRHt4rmPCZoWvz4GVMeIgfp6vO/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Inserindo atividades',
        source: 'https://drive.google.com/file/d/1d0vB-7TS4rNtRdNgZ6xQx5rN5SnMCOa2/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Adicionando Alunos',
        source: 'https://drive.google.com/file/d/1MkSTygajevco43s0bE7ZJsxA-Hf-U6qb/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Programando atividades',
        source: 'https://drive.google.com/file/d/1LcM-wXFQr56kgR57wK-Gf_DdBNZVJW6b/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Criando Rubrica',
        source: 'https://drive.google.com/file/d/1q7savLjkXFvcIHxRorJdwrAP0A01Jc1x/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Finalizando atividades programadas',
        source: 'https://drive.google.com/file/d/1vzpC6P9mNEiiL4mIqfVVqMZQUFmtyuQP/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Elaborando Perguntas',
        source: 'https://drive.google.com/file/d/1OSFLdwjQiPnWSV8vR6--cZ-_u24HbMOE/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Classroom',
        sub: 'Criando tópicos',
        source: 'https://drive.google.com/file/d/1-6m8f-hMX6ZsJytcu2kJ4_-8yybn6y3n/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/classroom.png',
        className: 'classroom',
    },
    {
        titulo: 'Google Drive',
        sub: 'Acessando o Google Drive',
        source: 'https://drive.google.com/file/d/1SLmDICHhodsIfwq2aSdRubjwg_tjGCHP/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/drive.png',
        className: 'g_drive',
    },
    {
        titulo: 'Google Drive',
        sub: 'Fazendo Envio de Arquivos',
        source: 'https://drive.google.com/file/d/1E-EdgYFpvMhVX9KowTxSSHGHz4KmrtyT/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/drive.png',
        className: 'g_drive',
    },
    {
        titulo: 'Google Drive',
        sub: 'Compartilhando Arquivos',
        source: 'https://drive.google.com/file/d/1QYZ923PF1Wdc_f1N5P3JzYq2OsXNAzg0/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/drive.png',
        className: 'g_drive',
    },
    {
        titulo: 'Google Drive',
        sub: 'Localizando Arquivos',
        source: 'https://drive.google.com/file/d/1J6BjSABC8RLAqGKQNdmrM9oc0mtMX8Xm/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/drive.png',
        className: 'g_drive',
    },
    {
        titulo: 'Google Drive',
        sub: 'Baixando Arquivos',
        source: 'https://drive.google.com/file/d/1boQhhoTGVCvD9toyZbLLSBIS4LLx99os/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/drive.png',
        className: 'g_drive',
    },
    {
        titulo: 'Google Forms',
        sub: 'Acessando Formulários',
        source: 'https://drive.google.com/file/d/16834yheFxgWuAvqDHbUM5bQhvZpbRJCA/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/forms.png',
        className: 'forms',
    },
    {
        titulo: 'Google Forms',
        sub: 'Alterando o tema do Formulário',
        source: 'https://drive.google.com/file/d/1A1l3WjQ3NnqrA0uaJ5mCDxs1XMmVf_8U/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/forms.png',
        className: 'forms',
    },
    {
        titulo: 'Google Forms',
        sub: 'Configurando Formulário Teste',
        source: 'https://drive.google.com/file/d/1-GQgwuiaHJcvyUBcjNo_3D0WSXX2Wh7E/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/forms.png',
        className: 'forms',
    },
    {
        titulo: 'Google Meet',
        sub: 'Como acessar',
        source: 'https://drive.google.com/file/d/1REzVMK9H-KwmbLy339Cbz8HPP9-l4Y0F/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/meet.png',
        className: 'meet',
    },
    {
        titulo: 'Google Meet',
        sub: 'Agendando Reuniões',
        source: 'https://drive.google.com/file/d/1O_iv0x-hSYclH3zsLhz1z-6YBCYEhGyC/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/meet.png',
        className: 'meet',
    },
    {
        titulo: 'Google Meet',
        sub: 'Criando Reuniões',
        source: 'https://drive.google.com/file/d/15_fw5oZ1PnI2-I2FdDNNnZr56PFjt9u6/view?usp=sharing',
        icon: 'assets/img/pmjp_icons/meet.png',
        className: 'meet',
    },
]

export {classList , tutoriais}