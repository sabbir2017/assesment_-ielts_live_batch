import React from 'react'

const Routine = ({ courseData }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="mb-4 text-base font-semibold md:text-2xl">
                    {courseData.data.sections.map((item) =>
                        item.type === "routine" ? item.name : null
                    )}
                </h2>
                <div className="flex items-center ">
                    <img
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/1667985694407.png"
                        className="h-4 w-[14px]"
                        alt="download"
                    />
                    <div className="ml-2">
                        <div className="text-sm font-medium underline cursor-pointer text-green md:text-base">
                            ডাউনলোড রুটিন
                        </div>
                    </div>
                </div>
            </div>
            <div className="html-content">
                <span
                    style={{ fontWeight: "normal" }}
                >
                    <div dir="ltr" style={{ marginLeft: "0pt" }} align="left">
                        <table className='w-full' style={{ border: "none" }}>
                            <colgroup>
                                <col width={194} />
                                <col width={251} />
                                <col width={193} />
                            </colgroup>
                            <tbody>
                                <tr style={{ height: "48.75pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                মডিউল
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                তারিখ
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                মডিউল ভিত্তিক ক্লাস সংখ্যা
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Introductory
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                January 06, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                1
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Listening
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                January 8, 2025- January 25, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                8
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Reading (Academic)
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                January 27, 2025- February 15, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                9
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Writing (Academic)
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                February 17, 2025- March 17, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                11
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Speaking
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                March 08, 2025-March 24, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                7
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Guideline class (Extra)
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                December 24, 2024- January 04, 2024
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                3
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Mock Test 1
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                February 12, 2025- February 16, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <br />
                                    </td>
                                </tr>
                                <tr style={{ height: "16.5pt" }}>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                Mock Test 2
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                February 17, 2025-February 20, 2025
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <br />
                                    </td>
                                </tr>
                                <tr style={{ height: "18.75pt" }}>
                                    <td
                                        colSpan={2}
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                মোট ক্লাস
                                            </span>
                                        </p>
                                    </td>
                                    <td
                                        style={{
                                            borderWidth: "0.625pt",
                                            borderColor: "rgb(0, 0, 0)",
                                            verticalAlign: "middle",
                                            padding: "2pt",
                                            overflow: "hidden",
                                            overflowWrap: "break-word"
                                        }}
                                    >
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.38",
                                                textAlign: "center",
                                                marginTop: "0pt",
                                                marginBottom: "0pt"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    fontFamily: '"Anek Bangla", sans-serif',
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariantNumeric: "normal",
                                                    fontVariantEastAsian: "normal",
                                                    fontVariantAlternates: "normal",
                                                    fontVariantPosition: "normal",
                                                    fontVariantEmoji: "normal",
                                                    verticalAlign: "baseline",
                                                    whiteSpaceCollapse: "preserve"
                                                }}
                                            >
                                                36
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Routine