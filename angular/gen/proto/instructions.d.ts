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

    /** ChordType enum. */
    enum ChordType {
        UNKNOWN_CHORD = 0,
        A = 1,
        B = 2,
        C = 3,
        D = 4,
        E = 5,
        F = 6,
        G = 7
    }

    /** Properties of a Chord. */
    interface IChord {

        /** Chord chordType */
        chordType?: (instructions.ChordType|null);

        /** Chord name */
        name?: (string|null);
    }

    /** Represents a Chord. */
    class Chord implements IChord {

        /**
         * Constructs a new Chord.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChord);

        /** Chord chordType. */
        public chordType: instructions.ChordType;

        /** Chord name. */
        public name: string;

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

        /** ChordInLyric chord */
        chord?: (instructions.IChord|null);

        /** ChordInLyric offset */
        offset?: (number|null);
    }

    /** Represents a ChordInLyric. */
    class ChordInLyric implements IChordInLyric {

        /**
         * Constructs a new ChordInLyric.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordInLyric);

        /** ChordInLyric chord. */
        public chord?: (instructions.IChord|null);

        /** ChordInLyric offset. */
        public offset: number;

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

        /** ChordsAndLyrics lyricLine */
        lyricLine?: (string|null);

        /** ChordsAndLyrics chordsInLyric */
        chordsInLyric?: (instructions.IChordInLyric[]|null);
    }

    /** Represents a ChordsAndLyrics. */
    class ChordsAndLyrics implements IChordsAndLyrics {

        /**
         * Constructs a new ChordsAndLyrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordsAndLyrics);

        /** ChordsAndLyrics lyricLine. */
        public lyricLine: string;

        /** ChordsAndLyrics chordsInLyric. */
        public chordsInLyric: instructions.IChordInLyric[];

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

    /** Properties of a ChordInstruction. */
    interface IChordInstruction {

        /** ChordInstruction chordsAndLyrics */
        chordsAndLyrics?: (instructions.IChordsAndLyrics[]|null);

        /** ChordInstruction chords */
        chords?: (instructions.IChord[]|null);
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
