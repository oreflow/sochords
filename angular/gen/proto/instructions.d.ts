import * as $protobuf from "protobufjs";
/** Namespace instructions. */
export namespace instructions {

    /** Properties of a StringCombination. */
    interface IStringCombination {

        /** StringCombination e4 */
        e4?: (string|null);

        /** StringCombination b */
        b?: (string|null);

        /** StringCombination g */
        g?: (string|null);

        /** StringCombination d */
        d?: (string|null);

        /** StringCombination a */
        a?: (string|null);

        /** StringCombination e2 */
        e2?: (string|null);

        /** StringCombination chord */
        chord?: (string|null);

        /** StringCombination guide */
        guide?: (string|null);
    }

    /** Represents a StringCombination. */
    class StringCombination implements IStringCombination {

        /**
         * Constructs a new StringCombination.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStringCombination);

        /** StringCombination e4. */
        public e4: string;

        /** StringCombination b. */
        public b: string;

        /** StringCombination g. */
        public g: string;

        /** StringCombination d. */
        public d: string;

        /** StringCombination a. */
        public a: string;

        /** StringCombination e2. */
        public e2: string;

        /** StringCombination chord. */
        public chord: string;

        /** StringCombination guide. */
        public guide: string;

        /**
         * Creates a new StringCombination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringCombination instance
         */
        public static create(properties?: instructions.IStringCombination): instructions.StringCombination;

        /**
         * Encodes the specified StringCombination message. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringCombination message, length delimited. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringCombination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.StringCombination;

        /**
         * Decodes a StringCombination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.StringCombination;

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
        public static fromObject(object: { [k: string]: any }): instructions.StringCombination;

        /**
         * Creates a plain object from a StringCombination message. Also converts values to other types if specified.
         * @param message StringCombination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.StringCombination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringCombination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabInstructionBlock. */
    interface ITabInstructionBlock {

        /** TabInstructionBlock picks */
        picks?: (instructions.IStringCombination[]|null);

        /** TabInstructionBlock breakLine */
        breakLine?: (boolean|null);

        /** TabInstructionBlock trailingText */
        trailingText?: (string|null);
    }

    /** Represents a TabInstructionBlock. */
    class TabInstructionBlock implements ITabInstructionBlock {

        /**
         * Constructs a new TabInstructionBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.ITabInstructionBlock);

        /** TabInstructionBlock picks. */
        public picks: instructions.IStringCombination[];

        /** TabInstructionBlock breakLine. */
        public breakLine: boolean;

        /** TabInstructionBlock trailingText. */
        public trailingText: string;

        /**
         * Creates a new TabInstructionBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabInstructionBlock instance
         */
        public static create(properties?: instructions.ITabInstructionBlock): instructions.TabInstructionBlock;

        /**
         * Encodes the specified TabInstructionBlock message. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @param message TabInstructionBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.ITabInstructionBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabInstructionBlock message, length delimited. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @param message TabInstructionBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.ITabInstructionBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.TabInstructionBlock;

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.TabInstructionBlock;

        /**
         * Verifies a TabInstructionBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabInstructionBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabInstructionBlock
         */
        public static fromObject(object: { [k: string]: any }): instructions.TabInstructionBlock;

        /**
         * Creates a plain object from a TabInstructionBlock message. Also converts values to other types if specified.
         * @param message TabInstructionBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.TabInstructionBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabInstructionBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabInstruction. */
    interface ITabInstruction {

        /** TabInstruction tabBlocks */
        tabBlocks?: (instructions.ITabInstructionBlock[]|null);
    }

    /** Represents a TabInstruction. */
    class TabInstruction implements ITabInstruction {

        /**
         * Constructs a new TabInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.ITabInstruction);

        /** TabInstruction tabBlocks. */
        public tabBlocks: instructions.ITabInstructionBlock[];

        /**
         * Creates a new TabInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabInstruction instance
         */
        public static create(properties?: instructions.ITabInstruction): instructions.TabInstruction;

        /**
         * Encodes the specified TabInstruction message. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @param message TabInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.ITabInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabInstruction message, length delimited. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @param message TabInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.ITabInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.TabInstruction;

        /**
         * Decodes a TabInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.TabInstruction;

        /**
         * Verifies a TabInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabInstruction
         */
        public static fromObject(object: { [k: string]: any }): instructions.TabInstruction;

        /**
         * Creates a plain object from a TabInstruction message. Also converts values to other types if specified.
         * @param message TabInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.TabInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chord. */
    interface IChord {

        /** Chord name */
        name?: (string|null);

        /** Chord guitarChordId */
        guitarChordId?: (string|null);
    }

    /** Represents a Chord. */
    class Chord implements IChord {

        /**
         * Constructs a new Chord.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChord);

        /** Chord name. */
        public name: string;

        /** Chord guitarChordId. */
        public guitarChordId: string;

        /**
         * Creates a new Chord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chord instance
         */
        public static create(properties?: instructions.IChord): instructions.Chord;

        /**
         * Encodes the specified Chord message. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chord message, length delimited. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.Chord;

        /**
         * Decodes a Chord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.Chord;

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
        public static fromObject(object: { [k: string]: any }): instructions.Chord;

        /**
         * Creates a plain object from a Chord message. Also converts values to other types if specified.
         * @param message Chord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.Chord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordInLyric. */
    interface IChordInLyric {

        /** ChordInLyric id */
        id?: (string|null);

        /** ChordInLyric chord */
        chord?: (instructions.IChord|null);

        /** ChordInLyric offset */
        offset?: (number|null);

        /** ChordInLyric songChord */
        songChord?: (chords.ISongChord|null);
    }

    /** Represents a ChordInLyric. */
    class ChordInLyric implements IChordInLyric {

        /**
         * Constructs a new ChordInLyric.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordInLyric);

        /** ChordInLyric id. */
        public id: string;

        /** ChordInLyric chord. */
        public chord?: (instructions.IChord|null);

        /** ChordInLyric offset. */
        public offset: number;

        /** ChordInLyric songChord. */
        public songChord?: (chords.ISongChord|null);

        /**
         * Creates a new ChordInLyric instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordInLyric instance
         */
        public static create(properties?: instructions.IChordInLyric): instructions.ChordInLyric;

        /**
         * Encodes the specified ChordInLyric message. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @param message ChordInLyric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordInLyric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordInLyric message, length delimited. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @param message ChordInLyric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordInLyric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordInLyric;

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordInLyric;

        /**
         * Verifies a ChordInLyric message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordInLyric message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordInLyric
         */
        public static fromObject(object: { [k: string]: any }): instructions.ChordInLyric;

        /**
         * Creates a plain object from a ChordInLyric message. Also converts values to other types if specified.
         * @param message ChordInLyric
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordInLyric, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordInLyric to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordsAndLyrics. */
    interface IChordsAndLyrics {

        /** ChordsAndLyrics id */
        id?: (string|null);

        /** ChordsAndLyrics lyricLine */
        lyricLine?: (string|null);

        /** ChordsAndLyrics chordsInLyric */
        chordsInLyric?: (instructions.IChordInLyric[]|null);

        /** ChordsAndLyrics breakLine */
        breakLine?: (boolean|null);
    }

    /** Represents a ChordsAndLyrics. */
    class ChordsAndLyrics implements IChordsAndLyrics {

        /**
         * Constructs a new ChordsAndLyrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordsAndLyrics);

        /** ChordsAndLyrics id. */
        public id: string;

        /** ChordsAndLyrics lyricLine. */
        public lyricLine: string;

        /** ChordsAndLyrics chordsInLyric. */
        public chordsInLyric: instructions.IChordInLyric[];

        /** ChordsAndLyrics breakLine. */
        public breakLine: boolean;

        /**
         * Creates a new ChordsAndLyrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordsAndLyrics instance
         */
        public static create(properties?: instructions.IChordsAndLyrics): instructions.ChordsAndLyrics;

        /**
         * Encodes the specified ChordsAndLyrics message. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @param message ChordsAndLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordsAndLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordsAndLyrics message, length delimited. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @param message ChordsAndLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordsAndLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordsAndLyrics;

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordsAndLyrics;

        /**
         * Verifies a ChordsAndLyrics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordsAndLyrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordsAndLyrics
         */
        public static fromObject(object: { [k: string]: any }): instructions.ChordsAndLyrics;

        /**
         * Creates a plain object from a ChordsAndLyrics message. Also converts values to other types if specified.
         * @param message ChordsAndLyrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordsAndLyrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordsAndLyrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Strum. */
    interface IStrum {

        /** Strum direction */
        direction?: (instructions.Strum.StrumDirection|null);

        /** Strum isHighlighted */
        isHighlighted?: (boolean|null);
    }

    /** Represents a Strum. */
    class Strum implements IStrum {

        /**
         * Constructs a new Strum.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStrum);

        /** Strum direction. */
        public direction: instructions.Strum.StrumDirection;

        /** Strum isHighlighted. */
        public isHighlighted: boolean;

        /**
         * Creates a new Strum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Strum instance
         */
        public static create(properties?: instructions.IStrum): instructions.Strum;

        /**
         * Encodes the specified Strum message. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @param message Strum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStrum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Strum message, length delimited. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @param message Strum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStrum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Strum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.Strum;

        /**
         * Decodes a Strum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.Strum;

        /**
         * Verifies a Strum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Strum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Strum
         */
        public static fromObject(object: { [k: string]: any }): instructions.Strum;

        /**
         * Creates a plain object from a Strum message. Also converts values to other types if specified.
         * @param message Strum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.Strum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Strum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Strum {

        /** StrumDirection enum. */
        enum StrumDirection {
            NO_STRUM = 0,
            UP = 1,
            DOWN = 2
        }
    }

    /** Properties of a StrummingPattern. */
    interface IStrummingPattern {

        /** StrummingPattern strums */
        strums?: (instructions.IStrum[]|null);
    }

    /** Represents a StrummingPattern. */
    class StrummingPattern implements IStrummingPattern {

        /**
         * Constructs a new StrummingPattern.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStrummingPattern);

        /** StrummingPattern strums. */
        public strums: instructions.IStrum[];

        /**
         * Creates a new StrummingPattern instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrummingPattern instance
         */
        public static create(properties?: instructions.IStrummingPattern): instructions.StrummingPattern;

        /**
         * Encodes the specified StrummingPattern message. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @param message StrummingPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStrummingPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrummingPattern message, length delimited. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @param message StrummingPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStrummingPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.StrummingPattern;

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.StrummingPattern;

        /**
         * Verifies a StrummingPattern message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrummingPattern message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrummingPattern
         */
        public static fromObject(object: { [k: string]: any }): instructions.StrummingPattern;

        /**
         * Creates a plain object from a StrummingPattern message. Also converts values to other types if specified.
         * @param message StrummingPattern
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.StrummingPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrummingPattern to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordInstruction. */
    interface IChordInstruction {

        /** ChordInstruction chordsAndLyrics */
        chordsAndLyrics?: (instructions.IChordsAndLyrics[]|null);

        /** ChordInstruction chords */
        chords?: (instructions.IChord[]|null);

        /** ChordInstruction strummingPattern */
        strummingPattern?: (instructions.IStrummingPattern|null);
    }

    /** Represents a ChordInstruction. */
    class ChordInstruction implements IChordInstruction {

        /**
         * Constructs a new ChordInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordInstruction);

        /** ChordInstruction chordsAndLyrics. */
        public chordsAndLyrics: instructions.IChordsAndLyrics[];

        /** ChordInstruction chords. */
        public chords: instructions.IChord[];

        /** ChordInstruction strummingPattern. */
        public strummingPattern?: (instructions.IStrummingPattern|null);

        /**
         * Creates a new ChordInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordInstruction instance
         */
        public static create(properties?: instructions.IChordInstruction): instructions.ChordInstruction;

        /**
         * Encodes the specified ChordInstruction message. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordInstruction message, length delimited. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordInstruction;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordInstruction;

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
        public static fromObject(object: { [k: string]: any }): instructions.ChordInstruction;

        /**
         * Creates a plain object from a ChordInstruction message. Also converts values to other types if specified.
         * @param message ChordInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace chords. */
export namespace chords {

    /** Properties of a ChordPattern. */
    interface IChordPattern {

        /** ChordPattern e4 */
        e4?: (string|null);

        /** ChordPattern b */
        b?: (string|null);

        /** ChordPattern g */
        g?: (string|null);

        /** ChordPattern d */
        d?: (string|null);

        /** ChordPattern a */
        a?: (string|null);

        /** ChordPattern e2 */
        e2?: (string|null);
    }

    /** Represents a ChordPattern. */
    class ChordPattern implements IChordPattern {

        /**
         * Constructs a new ChordPattern.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IChordPattern);

        /** ChordPattern e4. */
        public e4: string;

        /** ChordPattern b. */
        public b: string;

        /** ChordPattern g. */
        public g: string;

        /** ChordPattern d. */
        public d: string;

        /** ChordPattern a. */
        public a: string;

        /** ChordPattern e2. */
        public e2: string;

        /**
         * Creates a new ChordPattern instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordPattern instance
         */
        public static create(properties?: chords.IChordPattern): chords.ChordPattern;

        /**
         * Encodes the specified ChordPattern message. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @param message ChordPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IChordPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordPattern message, length delimited. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @param message ChordPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IChordPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordPattern message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.ChordPattern;

        /**
         * Decodes a ChordPattern message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.ChordPattern;

        /**
         * Verifies a ChordPattern message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordPattern message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordPattern
         */
        public static fromObject(object: { [k: string]: any }): chords.ChordPattern;

        /**
         * Creates a plain object from a ChordPattern message. Also converts values to other types if specified.
         * @param message ChordPattern
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.ChordPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordPattern to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuitarChord. */
    interface IGuitarChord {

        /** GuitarChord id */
        id?: (string|null);

        /** GuitarChord name */
        name?: (string|null);

        /** GuitarChord complexity */
        complexity?: (number|null);

        /** GuitarChord chordPattern */
        chordPattern?: (chords.IChordPattern|null);

        /** GuitarChord complexityRank */
        complexityRank?: (number|null);
    }

    /** Represents a GuitarChord. */
    class GuitarChord implements IGuitarChord {

        /**
         * Constructs a new GuitarChord.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IGuitarChord);

        /** GuitarChord id. */
        public id: string;

        /** GuitarChord name. */
        public name: string;

        /** GuitarChord complexity. */
        public complexity: number;

        /** GuitarChord chordPattern. */
        public chordPattern?: (chords.IChordPattern|null);

        /** GuitarChord complexityRank. */
        public complexityRank: number;

        /**
         * Creates a new GuitarChord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarChord instance
         */
        public static create(properties?: chords.IGuitarChord): chords.GuitarChord;

        /**
         * Encodes the specified GuitarChord message. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @param message GuitarChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IGuitarChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarChord message, length delimited. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @param message GuitarChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IGuitarChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarChord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.GuitarChord;

        /**
         * Decodes a GuitarChord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.GuitarChord;

        /**
         * Verifies a GuitarChord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarChord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarChord
         */
        public static fromObject(object: { [k: string]: any }): chords.GuitarChord;

        /**
         * Creates a plain object from a GuitarChord message. Also converts values to other types if specified.
         * @param message GuitarChord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.GuitarChord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarChord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuitarChords. */
    interface IGuitarChords {

        /** GuitarChords chords */
        chords?: (chords.IGuitarChord[]|null);
    }

    /** Represents a GuitarChords. */
    class GuitarChords implements IGuitarChords {

        /**
         * Constructs a new GuitarChords.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IGuitarChords);

        /** GuitarChords chords. */
        public chords: chords.IGuitarChord[];

        /**
         * Creates a new GuitarChords instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarChords instance
         */
        public static create(properties?: chords.IGuitarChords): chords.GuitarChords;

        /**
         * Encodes the specified GuitarChords message. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @param message GuitarChords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IGuitarChords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarChords message, length delimited. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @param message GuitarChords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IGuitarChords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarChords message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.GuitarChords;

        /**
         * Decodes a GuitarChords message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.GuitarChords;

        /**
         * Verifies a GuitarChords message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarChords message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarChords
         */
        public static fromObject(object: { [k: string]: any }): chords.GuitarChords;

        /**
         * Creates a plain object from a GuitarChords message. Also converts values to other types if specified.
         * @param message GuitarChords
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.GuitarChords, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarChords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongChord. */
    interface ISongChord {

        /** SongChord id */
        id?: (string|null);

        /** SongChord name */
        name?: (string|null);

        /** SongChord guitarChord */
        guitarChord?: (chords.IGuitarChord|null);
    }

    /** Represents a SongChord. */
    class SongChord implements ISongChord {

        /**
         * Constructs a new SongChord.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.ISongChord);

        /** SongChord id. */
        public id: string;

        /** SongChord name. */
        public name: string;

        /** SongChord guitarChord. */
        public guitarChord?: (chords.IGuitarChord|null);

        /**
         * Creates a new SongChord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongChord instance
         */
        public static create(properties?: chords.ISongChord): chords.SongChord;

        /**
         * Encodes the specified SongChord message. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @param message SongChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.ISongChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongChord message, length delimited. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @param message SongChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.ISongChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongChord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.SongChord;

        /**
         * Decodes a SongChord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.SongChord;

        /**
         * Verifies a SongChord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongChord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongChord
         */
        public static fromObject(object: { [k: string]: any }): chords.SongChord;

        /**
         * Creates a plain object from a SongChord message. Also converts values to other types if specified.
         * @param message SongChord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.SongChord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongChord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
