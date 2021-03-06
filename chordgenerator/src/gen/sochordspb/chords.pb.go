// Code generated by protoc-gen-go. DO NOT EDIT.
// source: chords.proto

package sochordspb

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type ChordPattern struct {
	E4                   string   `protobuf:"bytes,1,opt,name=e4,proto3" json:"e4,omitempty"`
	B                    string   `protobuf:"bytes,2,opt,name=b,proto3" json:"b,omitempty"`
	G                    string   `protobuf:"bytes,3,opt,name=g,proto3" json:"g,omitempty"`
	D                    string   `protobuf:"bytes,4,opt,name=d,proto3" json:"d,omitempty"`
	A                    string   `protobuf:"bytes,5,opt,name=a,proto3" json:"a,omitempty"`
	E2                   string   `protobuf:"bytes,6,opt,name=e2,proto3" json:"e2,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ChordPattern) Reset()         { *m = ChordPattern{} }
func (m *ChordPattern) String() string { return proto.CompactTextString(m) }
func (*ChordPattern) ProtoMessage()    {}
func (*ChordPattern) Descriptor() ([]byte, []int) {
	return fileDescriptor_f346d9a49fc36e8f, []int{0}
}

func (m *ChordPattern) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChordPattern.Unmarshal(m, b)
}
func (m *ChordPattern) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChordPattern.Marshal(b, m, deterministic)
}
func (m *ChordPattern) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChordPattern.Merge(m, src)
}
func (m *ChordPattern) XXX_Size() int {
	return xxx_messageInfo_ChordPattern.Size(m)
}
func (m *ChordPattern) XXX_DiscardUnknown() {
	xxx_messageInfo_ChordPattern.DiscardUnknown(m)
}

var xxx_messageInfo_ChordPattern proto.InternalMessageInfo

func (m *ChordPattern) GetE4() string {
	if m != nil {
		return m.E4
	}
	return ""
}

func (m *ChordPattern) GetB() string {
	if m != nil {
		return m.B
	}
	return ""
}

func (m *ChordPattern) GetG() string {
	if m != nil {
		return m.G
	}
	return ""
}

func (m *ChordPattern) GetD() string {
	if m != nil {
		return m.D
	}
	return ""
}

func (m *ChordPattern) GetA() string {
	if m != nil {
		return m.A
	}
	return ""
}

func (m *ChordPattern) GetE2() string {
	if m != nil {
		return m.E2
	}
	return ""
}

type GuitarChord struct {
	Id                   string        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string        `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Complexity           float32       `protobuf:"fixed32,3,opt,name=complexity,proto3" json:"complexity,omitempty"`
	ChordPattern         *ChordPattern `protobuf:"bytes,4,opt,name=chord_pattern,json=chordPattern,proto3" json:"chord_pattern,omitempty"`
	ComplexityRank       int32         `protobuf:"varint,5,opt,name=complexity_rank,json=complexityRank,proto3" json:"complexity_rank,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *GuitarChord) Reset()         { *m = GuitarChord{} }
func (m *GuitarChord) String() string { return proto.CompactTextString(m) }
func (*GuitarChord) ProtoMessage()    {}
func (*GuitarChord) Descriptor() ([]byte, []int) {
	return fileDescriptor_f346d9a49fc36e8f, []int{1}
}

func (m *GuitarChord) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GuitarChord.Unmarshal(m, b)
}
func (m *GuitarChord) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GuitarChord.Marshal(b, m, deterministic)
}
func (m *GuitarChord) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GuitarChord.Merge(m, src)
}
func (m *GuitarChord) XXX_Size() int {
	return xxx_messageInfo_GuitarChord.Size(m)
}
func (m *GuitarChord) XXX_DiscardUnknown() {
	xxx_messageInfo_GuitarChord.DiscardUnknown(m)
}

var xxx_messageInfo_GuitarChord proto.InternalMessageInfo

func (m *GuitarChord) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *GuitarChord) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GuitarChord) GetComplexity() float32 {
	if m != nil {
		return m.Complexity
	}
	return 0
}

func (m *GuitarChord) GetChordPattern() *ChordPattern {
	if m != nil {
		return m.ChordPattern
	}
	return nil
}

func (m *GuitarChord) GetComplexityRank() int32 {
	if m != nil {
		return m.ComplexityRank
	}
	return 0
}

type GuitarChords struct {
	Chords               []*GuitarChord `protobuf:"bytes,1,rep,name=chords,proto3" json:"chords,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *GuitarChords) Reset()         { *m = GuitarChords{} }
func (m *GuitarChords) String() string { return proto.CompactTextString(m) }
func (*GuitarChords) ProtoMessage()    {}
func (*GuitarChords) Descriptor() ([]byte, []int) {
	return fileDescriptor_f346d9a49fc36e8f, []int{2}
}

func (m *GuitarChords) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GuitarChords.Unmarshal(m, b)
}
func (m *GuitarChords) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GuitarChords.Marshal(b, m, deterministic)
}
func (m *GuitarChords) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GuitarChords.Merge(m, src)
}
func (m *GuitarChords) XXX_Size() int {
	return xxx_messageInfo_GuitarChords.Size(m)
}
func (m *GuitarChords) XXX_DiscardUnknown() {
	xxx_messageInfo_GuitarChords.DiscardUnknown(m)
}

var xxx_messageInfo_GuitarChords proto.InternalMessageInfo

func (m *GuitarChords) GetChords() []*GuitarChord {
	if m != nil {
		return m.Chords
	}
	return nil
}

func init() {
	proto.RegisterType((*ChordPattern)(nil), "chords.ChordPattern")
	proto.RegisterType((*GuitarChord)(nil), "chords.GuitarChord")
	proto.RegisterType((*GuitarChords)(nil), "chords.GuitarChords")
}

func init() {
	proto.RegisterFile("chords.proto", fileDescriptor_f346d9a49fc36e8f)
}

var fileDescriptor_f346d9a49fc36e8f = []byte{
	// 251 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xbd, 0x4e, 0xc3, 0x30,
	0x10, 0xc7, 0xe5, 0xb4, 0x8d, 0xc4, 0xc5, 0x14, 0xe9, 0x60, 0xf0, 0x84, 0xaa, 0x2c, 0x54, 0x42,
	0xea, 0x10, 0xba, 0x20, 0x36, 0x18, 0x58, 0x91, 0x47, 0x96, 0xca, 0xa9, 0x4d, 0x89, 0x4a, 0xe3,
	0xc8, 0x31, 0x12, 0x3c, 0x18, 0xef, 0x87, 0x7c, 0x76, 0x54, 0x6f, 0xf7, 0xb3, 0x4f, 0xff, 0x8f,
	0x03, 0xbe, 0xff, 0xb4, 0x4e, 0x8f, 0x9b, 0xc1, 0x59, 0x6f, 0xb1, 0x8c, 0x54, 0x7f, 0x00, 0x7f,
	0x09, 0xd3, 0x9b, 0xf2, 0xde, 0xb8, 0x1e, 0x97, 0x50, 0x98, 0xad, 0x60, 0x2b, 0xb6, 0xbe, 0x90,
	0x85, 0xd9, 0x22, 0x07, 0xd6, 0x8a, 0x82, 0x90, 0xb5, 0x81, 0x0e, 0x62, 0x16, 0xe9, 0x10, 0x48,
	0x8b, 0x79, 0x24, 0x1d, 0x48, 0x89, 0x45, 0x24, 0x45, 0x3a, 0x8d, 0x28, 0x93, 0x4e, 0x53, 0xff,
	0x31, 0xa8, 0x5e, 0xbf, 0x3b, 0xaf, 0x1c, 0xd9, 0x85, 0xff, 0x4e, 0x4f, 0x3e, 0x9d, 0x46, 0x84,
	0x79, 0xaf, 0x4e, 0x26, 0x59, 0xd1, 0x8c, 0xb7, 0x00, 0x7b, 0x7b, 0x1a, 0xbe, 0xcc, 0x4f, 0xe7,
	0x7f, 0xc9, 0xb6, 0x90, 0xd9, 0x0b, 0x3e, 0xc2, 0x25, 0xb5, 0xd8, 0x0d, 0x31, 0x3c, 0x65, 0xa9,
	0x9a, 0x9b, 0x4d, 0x6a, 0x9a, 0x17, 0x93, 0xb1, 0xfe, 0x54, 0xf3, 0x0e, 0xae, 0xce, 0x42, 0x3b,
	0xa7, 0xfa, 0x23, 0x45, 0x5f, 0xc8, 0xe5, 0xf9, 0x59, 0xaa, 0xfe, 0x58, 0x3f, 0x01, 0xcf, 0x62,
	0x8f, 0x78, 0x0f, 0xe9, 0x72, 0x82, 0xad, 0x66, 0xeb, 0xaa, 0xb9, 0x9e, 0xcc, 0xb2, 0x2d, 0x99,
	0x56, 0x9e, 0xf9, 0x3b, 0x8c, 0x36, 0xce, 0x43, 0xdb, 0x96, 0x74, 0xf9, 0x87, 0xff, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x96, 0x63, 0x8e, 0x6e, 0x89, 0x01, 0x00, 0x00,
}
