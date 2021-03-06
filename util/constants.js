const MESSAGES = {
    COMMANDS: {
        ACTIONS: {
            CUDDLE: {
                name: 'cuddle',
                aliases: ['cuddle'],
                category:'actions',
                description: 'Caline à la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },

            HIGHFIVE: {
                name: 'highfive',
                aliases: ['highfive'],
                category:'actions',
                description: 'Fait un high-five avec la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },

            HUG: {
                name: 'hug',
                aliases: ['hug'],
                category:'actions',
                description: 'Donne un calin à la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },

            KILL: {
                name: 'kill',
                aliases: ['kill'],
                category:'actions',
                description: 'Tue la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },
            KISS: {
                name: 'kiss',
                aliases: ['kiss'],
                category:'actions',
                description: 'Embrasse la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },
            LICK: {
                name: 'lick',
                aliases: ['lick'],
                category:'actions',
                description: 'Lèche la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },
            NOM: {
                name: 'nom',
                aliases: ['nom'],
                category:'actions',
                description: 'Mordille la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },
            PAT: {
                name: 'pat',
                aliases: ['pat'],
                category:'actions',
                description: 'Tapote la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
            },
            SLAP: {
                name: 'slap',
                aliases: ['slap'],
                category:'actions',
                description: 'Gifle la personne mentionnée',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: true
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
                permissions: false,
                args: true
            },

            ACTIVITY: {
                name: 'activity',
                aliases: ['activity'],
                category:'autre',
                description: 'Envoie des informations concernant l\'activité du serveur',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
            },

            AVATAR: {
                name: 'avatar',
                aliases: ['avatar'],
                category:'autre',
                description: 'Renvoie l\'avatar d\'un utilisateur',
                cooldown: 0,
                usage:'<mention>',
                permissions: false,
                args: false
            },
            
            ECHO: {
                name: 'echo',
                aliases: ['echo'],
                category:'autre',
                description: 'Répète le message d\'un utilisateur',
                cooldown: 0,
                usage:'<message>',
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
                permissions: false,
                args: true
            },
                
            SERVERINFO: {
                name: 'serverinfo',
                aliases: ['si'],
                category:'autre',
                description: 'Envoie des informations concernant le serveur',
                cooldown: 5,
                usage:'',
                permissions: false,
                args: false
            },

            SING: {
                name: 'sing',
                aliases: ['sing'],
                category:'autre',
                description: 'Envoie une emote de Senko',
                cooldown: 5,
                usage:'',
                permissions: false,
                args: false
            },

            TEST: {
                name: 'test',
                aliases: ['test'],
                category:'autre',
                description: 'test dé truk cool',
                cooldown: 0,
                usage:'',
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
                permissions: false,
                args: false
            }
            
            },

        COMPORTEMENT: {
            BLUSH: {
                name: 'blush',
                aliases: ['blush'],
                category:'comportement',
                description: 'Renvoie un GIF d\'une personne qui rougit ',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
              },
    
            CRY: {
                name: 'cry',
                aliases: ['cry'],
                category:'comportement',
                description: 'Renvoie un GIF d\'une personne qui pleure',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
               },

            POUT: {
                name: 'pout',
                aliases: ['pout'],
                category:'comportement',
                description: 'Renvoie une GIF d\'une personne gênée',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
            },

            SMILE: {
                name: 'smile',
                aliases: ['smile'],
                category:'comportement',
                description: 'Renvoie un GIF d\'une personne souriante',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false              
            },

            SMUG: {
                name: 'smug',
                aliases: ['smug'],
                category:'comportement',
                description: 'Renvoie un GIF d\'une personne avec un regard arrogant',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false              
            },

            THUMBSUP: {
                name: 'thumbsup',
                aliases: ['thumbsup'],
                category:'comportement',
                description: 'Renvoie un GIF d\'une personne avec le pouce levé' ,
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false              
            }

        },

        IMAGES: {
            CAT: {
                name: 'cat',
                aliases: ['cat', 'chat'],
                category:'images',
                description: 'Renvoie des images de chat',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
              },
    
            DOG: {
                name: 'dog',
                aliases: ['dog', 'chien'],
                category:'images',
                description: 'Renvoie des images de chien',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
               },

            FOX: {
                name: 'fox',
                aliases: ['fox', 'renard'],
                category:'images',
                description: 'Renvoie des images de renard',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
            },

            MEME: {
                name: 'meme',
                aliases: ['meme'],
                category:'images',
                description: 'Renvoie des memes',
                cooldown: 0,
                usage:'',
                permissions: false,
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
                usage:'<id> <raison>',
                permissions: true,
                args: true
            },

            KICK : {
                name: 'kick',
                aliases: ['k'],
                category:'moderation',
                description: 'Expulse un utilisateur',
                cooldown: 0,
                usage:'<id> <raison>',
                permissions: true,
                args: true
            },

            MBAN : {
                name: 'mban',
                aliases: ['mb'],
                category:'moderation',
                description: 'Ban plusieurs utilisateurs',
                cooldown: 0,
                usage:'<id> <id>',
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
                permissions: true,
                args: true
            }
        },

        REACTIONS: {
            JEUX: {
                name: 'jeux',
                aliases: ['jeux'],
                category:'reactions',
                description: 'Envoie un message avec des réactions.',
                cooldown: 0,
                usage:'',
                permissions: false,
                args: false
            }
        }
    }
}

exports.MESSAGES = MESSAGES;