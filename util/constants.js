const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            RELOAD: {
                name: 'reload',
                aliases: ['restart'],
                category:'admin',
                description: 'Relance le bot',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: true,
                args: false
            }
        },
        ANIMAUX: {
            CAT: {
                name: 'cat',
                aliases: ['cat', 'chat'],
                category:'animaux',
                description: 'Renvoie des images de chat',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            DOG: {
                name: 'dog',
                aliases: ['dog', 'chien'],
                category:'animaux',
                description: 'Renvoie des images de chien',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            FOX: {
                name: 'fox',
                aliases: ['fox', 'chien'],
                category:'animaux',
                description: 'Renvoie des images de renard',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            MEME: {
                name: 'meme',
                aliases: ['meme'],
                category:'animaux',
                description: 'Renvoie des memes',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        AUTRE: {   
            EIGHTBALL: {
                name: '8ball',
                aliases: ['8b'],
                category:'autre',
                description: 'Renvoie une réponse à une question',
                cooldown: 0,
                usage:'<question>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            
            ECHO: {
                name: 'echo',
                aliases: ['echo'],
                category:'autre',
                description: 'Répète le message d\'un utilisateur',
                cooldown: 0,
                usage:'<message>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            HELP: {
                name: 'help',
                aliases: ['help'],
                category:'autre',
                description: 'Renvoie la liste des commandes',
                cooldown: 10,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            PING: {
                name: 'ping',
                aliases: ['ping'],
                category:'autre',
                description: 'Affiche la latence du bot.',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            POLL: {
                name: 'poll',
                aliases: ['poll', 'sondage'],
                category:'autre',
                description: 'Renvoie un sondage',
                cooldown: 0,
                usage:'<sondage>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            SERVERINFO: {
                name: 'serverinfo',
                aliases: ['si'],
                category:'autre',
                description: 'Envoie des informations concernant le serveur',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            USERINFO: {
                name: 'userinfo',
                aliases: ['ui'],
                category:'autre',
                description: 'Envoie vos informations/des informations concernant un utilisateur',
                cooldown: 0,
                usage:'<mention>',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
            
        },
        COLLECTORS: {
            MSGCOLLECTOR: {
                name: 'msgcollector',
                aliases: ['msgcollector', 'mcol'],
                category:'collectors',
                description: 'Message collector',
                cooldown: 0,
                usage:'<message>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            REACTCOLLECTOR: {
                name: 'reactcollector',
                aliases: ['reactcollector', 'rcol'],
                category:'collectors',
                description: 'React collector',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: true,
                args: false
            }
        },

        MODERATION: {
            BAN : {
                name: 'ban',
                aliases: ['b'],
                category:'moderation',
                description: 'Ban un utilisateur',
                cooldown: 0,
                usage:'<mention> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            KICK : {
                name: 'kick',
                aliases: ['k'],
                category:'moderation',
                description: 'Expulse un utilisateur',
                cooldown: 0,
                usage:'<mention> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            MUTE: {
                name: 'mute',
                aliases: ['m'],
                category:'moderation',
                description: 'Met en sourdine un utilisateur',
                cooldown: 0,
                usage:'<mention> <temps>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            PRUNE: {
                name: 'prune',
                aliases: ['prune'],
                category:'moderation',
                description: 'Supprime un nombre X de messages d\'un utilisateur en particulier',
                cooldown: 0,
                usage:'<mention> <nbr_messages>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            PURGE: {
                name: 'purge',
                aliases: ['clear'],
                category:'moderation',
                description: 'Supprime un nombre X de messages',
                cooldown: 0,
                usage:'<nbr_messages>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            REPORT: {
                name: 'report',
                aliases: ['report'],
                category:'moderation',
                description: 'Signale un utilisateur',
                cooldown: 0,
                usage:'<mention> <id_message> <raison>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            UNBAN: {
                name: 'unban',
                aliases: ['unban'],
                category:'moderation',
                description: 'Unban un utilisateur',
                cooldown: 0,
                usage:'<id>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            UNMUTE: {
                name: 'unmute',
                aliases: ['unmute'],
                category:'moderation',
                description: 'Rétabli la voix d\'un utilisateur',
                cooldownn: 0,
                usage:'<mention>',
                isUserAdmin: true,
                permissions: true,
                args: true
            }
        },

        REACTIONS: {
            ALLROLES: {
                name: 'allroles',
                aliases: ['allroles'],
                category:'reactions',
                description: 'Envoie un message avec des réactions.',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            EMOJI: {
                name: 'emoji',
                aliases: ['emoji'],
                category:'reactions',
                description: 'Envoie des émojis sur notre message.',
                cooldown: 0,
                usage:'',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;