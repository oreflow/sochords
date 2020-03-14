import * as $protobuf from "protobufjs";
/** Namespace songs. */
export namespace songs {

    /** Properties of an ArtistInfo. */
    interface IArtistInfo {

        /** ArtistInfo name */
        name?: (string|null);
    }

    /** Represents an ArtistInfo. */
    class ArtistInfo implements IArtistInfo {

        /**
         * Constructs a new ArtistInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IArtistInfo);

        /** ArtistInfo name. */
        public name: string;

        /**
         * Creates a new ArtistInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtistInfo instance
         */
        public static create(properties?: songs.IArtistInfo): songs.ArtistInfo;

        /**
         * Encodes the specified ArtistInfo message. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @param message ArtistInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IArtistInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtistInfo message, length delimited. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @param message ArtistInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IArtistInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtistInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.ArtistInfo;

        /**
         * Decodes an ArtistInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.ArtistInfo;

        /**
         * Verifies an ArtistInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtistInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtistInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.ArtistInfo;

        /**
         * Creates a plain object from an ArtistInfo message. Also converts values to other types if specified.
         * @param message ArtistInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.ArtistInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtistInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongInfo. */
    interface ISongInfo {

        /** SongInfo title */
        title?: (string|null);

        /** SongInfo artists */
        artists?: (songs.IArtistInfo[]|null);
    }

    /** Represents a SongInfo. */
    class SongInfo implements ISongInfo {

        /**
         * Constructs a new SongInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongInfo);

        /** SongInfo title. */
        public title: string;

        /** SongInfo artists. */
        public artists: songs.IArtistInfo[];

        /**
         * Creates a new SongInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongInfo instance
         */
        public static create(properties?: songs.ISongInfo): songs.SongInfo;

        /**
         * Encodes the specified SongInfo message. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @param message SongInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongInfo message, length delimited. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @param message SongInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongInfo;

        /**
         * Decodes a SongInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongInfo;

        /**
         * Verifies a SongInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.SongInfo;

        /**
         * Creates a plain object from a SongInfo message. Also converts values to other types if specified.
         * @param message SongInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongSearchResult. */
    interface ISongSearchResult {

        /** SongSearchResult id */
        id?: (string|null);

        /** SongSearchResult songInfo */
        songInfo?: (songs.ISongInfo|null);
    }

    /** Represents a SongSearchResult. */
    class SongSearchResult implements ISongSearchResult {

        /**
         * Constructs a new SongSearchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongSearchResult);

        /** SongSearchResult id. */
        public id: string;

        /** SongSearchResult songInfo. */
        public songInfo?: (songs.ISongInfo|null);

        /**
         * Creates a new SongSearchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongSearchResult instance
         */
        public static create(properties?: songs.ISongSearchResult): songs.SongSearchResult;

        /**
         * Encodes the specified SongSearchResult message. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @param message SongSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongSearchResult message, length delimited. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @param message SongSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongSearchResult;

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongSearchResult;

        /**
         * Verifies a SongSearchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongSearchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongSearchResult
         */
        public static fromObject(object: { [k: string]: any }): songs.SongSearchResult;

        /**
         * Creates a plain object from a SongSearchResult message. Also converts values to other types if specified.
         * @param message SongSearchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongSearchResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SoChordSong enum. */
    enum SoChordSong {
        UNKNOWN = 0,
        SHALLOW = 1,
        GOOD_RIDDANCE = 2,
        THE_PARTING_GLASS = 3
    }

    /** Properties of a StringCombination. */
    interface IStringCombination {

        /** StringCombination e4 */
        e4?: (number|null);

        /** StringCombination b */
        b?: (number|null);

        /** StringCombination g */
        g?: (number|null);

        /** StringCombination d */
        d?: (number|null);

        /** StringCombination a */
        a?: (number|null);

        /** StringCombination e2 */
        e2?: (number|null);

        /** StringCombination name */
        name?: (string|null);
    }

    /** Represents a StringCombination. */
    class StringCombination implements IStringCombination {

        /**
         * Constructs a new StringCombination.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IStringCombination);

        /** StringCombination e4. */
        public e4: number;

        /** StringCombination b. */
        public b: number;

        /** StringCombination g. */
        public g: number;

        /** StringCombination d. */
        public d: number;

        /** StringCombination a. */
        public a: number;

        /** StringCombination e2. */
        public e2: number;

        /** StringCombination name. */
        public name: string;

        /**
         * Creates a new StringCombination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringCombination instance
         */
        public static create(properties?: songs.IStringCombination): songs.StringCombination;

        /**
         * Encodes the specified StringCombination message. Does not implicitly {@link songs.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringCombination message, length delimited. Does not implicitly {@link songs.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringCombination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.StringCombination;

        /**
         * Decodes a StringCombination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.StringCombination;

        /**
         * Verifies a StringCombination message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringCombination message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringCombination
         */
        public static fromObject(object: { [k: string]: any }): songs.StringCombination;

        /**
         * Creates a plain object from a StringCombination message. Also converts values to other types if specified.
         * @param message StringCombination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.StringCombination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringCombination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Tempo enum. */
    enum Tempo {
        UNKNOWN_TEMPO = 0,
        EIGHT = 1
    }

    /** Properties of a PickInstruction. */
    interface IPickInstruction {

        /** PickInstruction tempo */
        tempo?: (songs.Tempo|null);

        /** PickInstruction picks */
        picks?: (songs.IStringCombination[]|null);
    }

    /** Represents a PickInstruction. */
    class PickInstruction implements IPickInstruction {

        /**
         * Constructs a new PickInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IPickInstruction);

        /** PickInstruction tempo. */
        public tempo: songs.Tempo;

        /** PickInstruction picks. */
        public picks: songs.IStringCombination[];

        /**
         * Creates a new PickInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PickInstruction instance
         */
        public static create(properties?: songs.IPickInstruction): songs.PickInstruction;

        /**
         * Encodes the specified PickInstruction message. Does not implicitly {@link songs.PickInstruction.verify|verify} messages.
         * @param message PickInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IPickInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PickInstruction message, length delimited. Does not implicitly {@link songs.PickInstruction.verify|verify} messages.
         * @param message PickInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IPickInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PickInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PickInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.PickInstruction;

        /**
         * Decodes a PickInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PickInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.PickInstruction;

        /**
         * Verifies a PickInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PickInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PickInstruction
         */
        public static fromObject(object: { [k: string]: any }): songs.PickInstruction;

        /**
         * Creates a plain object from a PickInstruction message. Also converts values to other types if specified.
         * @param message PickInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.PickInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PickInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Strum enum. */
    enum Strum {
        NONE = 0,
        UP = 1,
        DOWN = 2
    }

    /** Properties of a Chord. */
    interface IChord {

        /** Chord name */
        name?: (string|null);

        /** Chord strummingPattern */
        strummingPattern?: (songs.Strum[]|null);
    }

    /** Represents a Chord. */
    class Chord implements IChord {

        /**
         * Constructs a new Chord.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IChord);

        /** Chord name. */
        public name: string;

        /** Chord strummingPattern. */
        public strummingPattern: songs.Strum[];

        /**
         * Creates a new Chord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chord instance
         */
        public static create(properties?: songs.IChord): songs.Chord;

        /**
         * Encodes the specified Chord message. Does not implicitly {@link songs.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chord message, length delimited. Does not implicitly {@link songs.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Chord;

        /**
         * Decodes a Chord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Chord;

        /**
         * Verifies a Chord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chord
         */
        public static fromObject(object: { [k: string]: any }): songs.Chord;

        /**
         * Creates a plain object from a Chord message. Also converts values to other types if specified.
         * @param message Chord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Chord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordInstruction. */
    interface IChordInstruction {

        /** ChordInstruction chords */
        chords?: (songs.IChord[]|null);
    }

    /** Represents a ChordInstruction. */
    class ChordInstruction implements IChordInstruction {

        /**
         * Constructs a new ChordInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IChordInstruction);

        /** ChordInstruction chords. */
        public chords: songs.IChord[];

        /**
         * Creates a new ChordInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordInstruction instance
         */
        public static create(properties?: songs.IChordInstruction): songs.ChordInstruction;

        /**
         * Encodes the specified ChordInstruction message. Does not implicitly {@link songs.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordInstruction message, length delimited. Does not implicitly {@link songs.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.ChordInstruction;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.ChordInstruction;

        /**
         * Verifies a ChordInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordInstruction
         */
        public static fromObject(object: { [k: string]: any }): songs.ChordInstruction;

        /**
         * Creates a plain object from a ChordInstruction message. Also converts values to other types if specified.
         * @param message ChordInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.ChordInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InstructionSection. */
    interface IInstructionSection {

        /** InstructionSection pickInstruction */
        pickInstruction?: (songs.IPickInstruction|null);

        /** InstructionSection chordInstruction */
        chordInstruction?: (songs.IChordInstruction|null);
    }

    /** Represents an InstructionSection. */
    class InstructionSection implements IInstructionSection {

        /**
         * Constructs a new InstructionSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IInstructionSection);

        /** InstructionSection pickInstruction. */
        public pickInstruction?: (songs.IPickInstruction|null);

        /** InstructionSection chordInstruction. */
        public chordInstruction?: (songs.IChordInstruction|null);

        /** InstructionSection instruction. */
        public instruction?: ("pickInstruction"|"chordInstruction");

        /**
         * Creates a new InstructionSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InstructionSection instance
         */
        public static create(properties?: songs.IInstructionSection): songs.InstructionSection;

        /**
         * Encodes the specified InstructionSection message. Does not implicitly {@link songs.InstructionSection.verify|verify} messages.
         * @param message InstructionSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IInstructionSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InstructionSection message, length delimited. Does not implicitly {@link songs.InstructionSection.verify|verify} messages.
         * @param message InstructionSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IInstructionSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InstructionSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstructionSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.InstructionSection;

        /**
         * Decodes an InstructionSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InstructionSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.InstructionSection;

        /**
         * Verifies an InstructionSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InstructionSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstructionSection
         */
        public static fromObject(object: { [k: string]: any }): songs.InstructionSection;

        /**
         * Creates a plain object from an InstructionSection message. Also converts values to other types if specified.
         * @param message InstructionSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.InstructionSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InstructionSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Instruction. */
    interface IInstruction {

        /** Instruction sections */
        sections?: (songs.IInstructionSection[]|null);
    }

    /** Represents an Instruction. */
    class Instruction implements IInstruction {

        /**
         * Constructs a new Instruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IInstruction);

        /** Instruction sections. */
        public sections: songs.IInstructionSection[];

        /**
         * Creates a new Instruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Instruction instance
         */
        public static create(properties?: songs.IInstruction): songs.Instruction;

        /**
         * Encodes the specified Instruction message. Does not implicitly {@link songs.Instruction.verify|verify} messages.
         * @param message Instruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Instruction message, length delimited. Does not implicitly {@link songs.Instruction.verify|verify} messages.
         * @param message Instruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Instruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Instruction;

        /**
         * Decodes an Instruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Instruction;

        /**
         * Verifies an Instruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Instruction
         */
        public static fromObject(object: { [k: string]: any }): songs.Instruction;

        /**
         * Creates a plain object from an Instruction message. Also converts values to other types if specified.
         * @param message Instruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Instruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Instruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Vocal. */
    interface IVocal {

        /** Vocal lines */
        lines?: (string[]|null);
    }

    /** Represents a Vocal. */
    class Vocal implements IVocal {

        /**
         * Constructs a new Vocal.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IVocal);

        /** Vocal lines. */
        public lines: string[];

        /**
         * Creates a new Vocal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vocal instance
         */
        public static create(properties?: songs.IVocal): songs.Vocal;

        /**
         * Encodes the specified Vocal message. Does not implicitly {@link songs.Vocal.verify|verify} messages.
         * @param message Vocal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IVocal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vocal message, length delimited. Does not implicitly {@link songs.Vocal.verify|verify} messages.
         * @param message Vocal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IVocal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vocal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Vocal;

        /**
         * Decodes a Vocal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Vocal;

        /**
         * Verifies a Vocal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vocal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vocal
         */
        public static fromObject(object: { [k: string]: any }): songs.Vocal;

        /**
         * Creates a plain object from a Vocal message. Also converts values to other types if specified.
         * @param message Vocal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Vocal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vocal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongSection. */
    interface ISongSection {

        /** SongSection section */
        section?: (songs.SongSection.Section|null);

        /** SongSection number */
        number?: (number|null);
    }

    /** Represents a SongSection. */
    class SongSection implements ISongSection {

        /**
         * Constructs a new SongSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongSection);

        /** SongSection section. */
        public section: songs.SongSection.Section;

        /** SongSection number. */
        public number: number;

        /**
         * Creates a new SongSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongSection instance
         */
        public static create(properties?: songs.ISongSection): songs.SongSection;

        /**
         * Encodes the specified SongSection message. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @param message SongSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongSection message, length delimited. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @param message SongSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongSection;

        /**
         * Decodes a SongSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongSection;

        /**
         * Verifies a SongSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongSection
         */
        public static fromObject(object: { [k: string]: any }): songs.SongSection;

        /**
         * Creates a plain object from a SongSection message. Also converts values to other types if specified.
         * @param message SongSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SongSection {

        /** Section enum. */
        enum Section {
            UNKNOWN_SECTION = 0,
            INTRO = 1,
            VERSE = 2,
            PRE_CHORUS = 3,
            CHORUS = 4,
            BRIDGE = 5,
            OUTRO = 6,
            POST_CHORUS = 7,
            SOLO = 8,
            BREAK = 9
        }
    }

    /** Properties of a Song. */
    interface ISong {

        /** Song sections */
        sections?: (songs.ISongSection[]|null);

        /** Song instructions */
        instructions?: ({ [k: string]: songs.IInstruction }|null);

        /** Song vocals */
        vocals?: ({ [k: string]: songs.IVocal }|null);
    }

    /** Represents a Song. */
    class Song implements ISong {

        /**
         * Constructs a new Song.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISong);

        /** Song sections. */
        public sections: songs.ISongSection[];

        /** Song instructions. */
        public instructions: { [k: string]: songs.IInstruction };

        /** Song vocals. */
        public vocals: { [k: string]: songs.IVocal };

        /**
         * Creates a new Song instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Song instance
         */
        public static create(properties?: songs.ISong): songs.Song;

        /**
         * Encodes the specified Song message. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Song message, length delimited. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Song message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Song;

        /**
         * Decodes a Song message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Song;

        /**
         * Verifies a Song message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Song message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Song
         */
        public static fromObject(object: { [k: string]: any }): songs.Song;

        /**
         * Creates a plain object from a Song message. Also converts values to other types if specified.
         * @param message Song
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Song, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Song to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
