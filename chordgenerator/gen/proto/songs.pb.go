// Code generated by protoc-gen-go. DO NOT EDIT.
// source: songs.proto

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

type SongSection_SectionType int32

const (
	SongSection_SECTION_TYPE_UNKNOWN SongSection_SectionType = 0
	SongSection_TAB_SECTION          SongSection_SectionType = 1
	SongSection_CHORD_SECTION        SongSection_SectionType = 2
)

var SongSection_SectionType_name = map[int32]string{
	0: "SECTION_TYPE_UNKNOWN",
	1: "TAB_SECTION",
	2: "CHORD_SECTION",
}

var SongSection_SectionType_value = map[string]int32{
	"SECTION_TYPE_UNKNOWN": 0,
	"TAB_SECTION":          1,
	"CHORD_SECTION":        2,
}

func (x SongSection_SectionType) String() string {
	return proto.EnumName(SongSection_SectionType_name, int32(x))
}

func (SongSection_SectionType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{7, 0}
}

type Song_State int32

const (
	Song_STATE_UNKNOWN Song_State = 0
	Song_DRAFT         Song_State = 1
	Song_COMPLETE      Song_State = 2
)

var Song_State_name = map[int32]string{
	0: "STATE_UNKNOWN",
	1: "DRAFT",
	2: "COMPLETE",
}

var Song_State_value = map[string]int32{
	"STATE_UNKNOWN": 0,
	"DRAFT":         1,
	"COMPLETE":      2,
}

func (x Song_State) String() string {
	return proto.EnumName(Song_State_name, int32(x))
}

func (Song_State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{8, 0}
}

type ArtistInfo struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ArtistInfo) Reset()         { *m = ArtistInfo{} }
func (m *ArtistInfo) String() string { return proto.CompactTextString(m) }
func (*ArtistInfo) ProtoMessage()    {}
func (*ArtistInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{0}
}

func (m *ArtistInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArtistInfo.Unmarshal(m, b)
}
func (m *ArtistInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArtistInfo.Marshal(b, m, deterministic)
}
func (m *ArtistInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArtistInfo.Merge(m, src)
}
func (m *ArtistInfo) XXX_Size() int {
	return xxx_messageInfo_ArtistInfo.Size(m)
}
func (m *ArtistInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_ArtistInfo.DiscardUnknown(m)
}

var xxx_messageInfo_ArtistInfo proto.InternalMessageInfo

func (m *ArtistInfo) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type SongInfo struct {
	Title   string        `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Artists []*ArtistInfo `protobuf:"bytes,2,rep,name=artists,proto3" json:"artists,omitempty"`
	//TODO: Figure out if I can use Int64.
	LatestUpdateMillis   int32    `protobuf:"varint,3,opt,name=latest_update_millis,json=latestUpdateMillis,proto3" json:"latest_update_millis,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SongInfo) Reset()         { *m = SongInfo{} }
func (m *SongInfo) String() string { return proto.CompactTextString(m) }
func (*SongInfo) ProtoMessage()    {}
func (*SongInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{1}
}

func (m *SongInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SongInfo.Unmarshal(m, b)
}
func (m *SongInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SongInfo.Marshal(b, m, deterministic)
}
func (m *SongInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SongInfo.Merge(m, src)
}
func (m *SongInfo) XXX_Size() int {
	return xxx_messageInfo_SongInfo.Size(m)
}
func (m *SongInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_SongInfo.DiscardUnknown(m)
}

var xxx_messageInfo_SongInfo proto.InternalMessageInfo

func (m *SongInfo) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *SongInfo) GetArtists() []*ArtistInfo {
	if m != nil {
		return m.Artists
	}
	return nil
}

func (m *SongInfo) GetLatestUpdateMillis() int32 {
	if m != nil {
		return m.LatestUpdateMillis
	}
	return 0
}

type SongSearchResult struct {
	Id                   string    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	SongInfo             *SongInfo `protobuf:"bytes,2,opt,name=song_info,json=songInfo,proto3" json:"song_info,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *SongSearchResult) Reset()         { *m = SongSearchResult{} }
func (m *SongSearchResult) String() string { return proto.CompactTextString(m) }
func (*SongSearchResult) ProtoMessage()    {}
func (*SongSearchResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{2}
}

func (m *SongSearchResult) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SongSearchResult.Unmarshal(m, b)
}
func (m *SongSearchResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SongSearchResult.Marshal(b, m, deterministic)
}
func (m *SongSearchResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SongSearchResult.Merge(m, src)
}
func (m *SongSearchResult) XXX_Size() int {
	return xxx_messageInfo_SongSearchResult.Size(m)
}
func (m *SongSearchResult) XXX_DiscardUnknown() {
	xxx_messageInfo_SongSearchResult.DiscardUnknown(m)
}

var xxx_messageInfo_SongSearchResult proto.InternalMessageInfo

func (m *SongSearchResult) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *SongSearchResult) GetSongInfo() *SongInfo {
	if m != nil {
		return m.SongInfo
	}
	return nil
}

type Vocal struct {
	Lines                []string `protobuf:"bytes,1,rep,name=lines,proto3" json:"lines,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Vocal) Reset()         { *m = Vocal{} }
func (m *Vocal) String() string { return proto.CompactTextString(m) }
func (*Vocal) ProtoMessage()    {}
func (*Vocal) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{3}
}

func (m *Vocal) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Vocal.Unmarshal(m, b)
}
func (m *Vocal) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Vocal.Marshal(b, m, deterministic)
}
func (m *Vocal) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Vocal.Merge(m, src)
}
func (m *Vocal) XXX_Size() int {
	return xxx_messageInfo_Vocal.Size(m)
}
func (m *Vocal) XXX_DiscardUnknown() {
	xxx_messageInfo_Vocal.DiscardUnknown(m)
}

var xxx_messageInfo_Vocal proto.InternalMessageInfo

func (m *Vocal) GetLines() []string {
	if m != nil {
		return m.Lines
	}
	return nil
}

type SongSectionInfo struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SongSectionInfo) Reset()         { *m = SongSectionInfo{} }
func (m *SongSectionInfo) String() string { return proto.CompactTextString(m) }
func (*SongSectionInfo) ProtoMessage()    {}
func (*SongSectionInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{4}
}

func (m *SongSectionInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SongSectionInfo.Unmarshal(m, b)
}
func (m *SongSectionInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SongSectionInfo.Marshal(b, m, deterministic)
}
func (m *SongSectionInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SongSectionInfo.Merge(m, src)
}
func (m *SongSectionInfo) XXX_Size() int {
	return xxx_messageInfo_SongSectionInfo.Size(m)
}
func (m *SongSectionInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_SongSectionInfo.DiscardUnknown(m)
}

var xxx_messageInfo_SongSectionInfo proto.InternalMessageInfo

func (m *SongSectionInfo) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type TabSection struct {
	Instruction          *TabInstruction `protobuf:"bytes,1,opt,name=instruction,proto3" json:"instruction,omitempty"`
	Vocal                *Vocal          `protobuf:"bytes,2,opt,name=vocal,proto3" json:"vocal,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *TabSection) Reset()         { *m = TabSection{} }
func (m *TabSection) String() string { return proto.CompactTextString(m) }
func (*TabSection) ProtoMessage()    {}
func (*TabSection) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{5}
}

func (m *TabSection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TabSection.Unmarshal(m, b)
}
func (m *TabSection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TabSection.Marshal(b, m, deterministic)
}
func (m *TabSection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TabSection.Merge(m, src)
}
func (m *TabSection) XXX_Size() int {
	return xxx_messageInfo_TabSection.Size(m)
}
func (m *TabSection) XXX_DiscardUnknown() {
	xxx_messageInfo_TabSection.DiscardUnknown(m)
}

var xxx_messageInfo_TabSection proto.InternalMessageInfo

func (m *TabSection) GetInstruction() *TabInstruction {
	if m != nil {
		return m.Instruction
	}
	return nil
}

func (m *TabSection) GetVocal() *Vocal {
	if m != nil {
		return m.Vocal
	}
	return nil
}

type ChordSection struct {
	Instruction          *ChordInstruction `protobuf:"bytes,1,opt,name=instruction,proto3" json:"instruction,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ChordSection) Reset()         { *m = ChordSection{} }
func (m *ChordSection) String() string { return proto.CompactTextString(m) }
func (*ChordSection) ProtoMessage()    {}
func (*ChordSection) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{6}
}

func (m *ChordSection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChordSection.Unmarshal(m, b)
}
func (m *ChordSection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChordSection.Marshal(b, m, deterministic)
}
func (m *ChordSection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChordSection.Merge(m, src)
}
func (m *ChordSection) XXX_Size() int {
	return xxx_messageInfo_ChordSection.Size(m)
}
func (m *ChordSection) XXX_DiscardUnknown() {
	xxx_messageInfo_ChordSection.DiscardUnknown(m)
}

var xxx_messageInfo_ChordSection proto.InternalMessageInfo

func (m *ChordSection) GetInstruction() *ChordInstruction {
	if m != nil {
		return m.Instruction
	}
	return nil
}

type SongSection struct {
	Id          string                  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info        *SongSectionInfo        `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	SectionType SongSection_SectionType `protobuf:"varint,3,opt,name=section_type,json=sectionType,proto3,enum=songs.SongSection_SectionType" json:"section_type,omitempty"`
	// Note Only one of these should be set, depending on section_type enum.
	TabSection           *TabSection   `protobuf:"bytes,4,opt,name=tab_section,json=tabSection,proto3" json:"tab_section,omitempty"`
	ChordSection         *ChordSection `protobuf:"bytes,5,opt,name=chord_section,json=chordSection,proto3" json:"chord_section,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *SongSection) Reset()         { *m = SongSection{} }
func (m *SongSection) String() string { return proto.CompactTextString(m) }
func (*SongSection) ProtoMessage()    {}
func (*SongSection) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{7}
}

func (m *SongSection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SongSection.Unmarshal(m, b)
}
func (m *SongSection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SongSection.Marshal(b, m, deterministic)
}
func (m *SongSection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SongSection.Merge(m, src)
}
func (m *SongSection) XXX_Size() int {
	return xxx_messageInfo_SongSection.Size(m)
}
func (m *SongSection) XXX_DiscardUnknown() {
	xxx_messageInfo_SongSection.DiscardUnknown(m)
}

var xxx_messageInfo_SongSection proto.InternalMessageInfo

func (m *SongSection) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *SongSection) GetInfo() *SongSectionInfo {
	if m != nil {
		return m.Info
	}
	return nil
}

func (m *SongSection) GetSectionType() SongSection_SectionType {
	if m != nil {
		return m.SectionType
	}
	return SongSection_SECTION_TYPE_UNKNOWN
}

func (m *SongSection) GetTabSection() *TabSection {
	if m != nil {
		return m.TabSection
	}
	return nil
}

func (m *SongSection) GetChordSection() *ChordSection {
	if m != nil {
		return m.ChordSection
	}
	return nil
}

type Song struct {
	Id                   string         `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OwnerUid             string         `protobuf:"bytes,2,opt,name=owner_uid,json=ownerUid,proto3" json:"owner_uid,omitempty"`
	State                Song_State     `protobuf:"varint,3,opt,name=state,proto3,enum=songs.Song_State" json:"state,omitempty"`
	Info                 *SongInfo      `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	Sections             []*SongSection `protobuf:"bytes,5,rep,name=sections,proto3" json:"sections,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *Song) Reset()         { *m = Song{} }
func (m *Song) String() string { return proto.CompactTextString(m) }
func (*Song) ProtoMessage()    {}
func (*Song) Descriptor() ([]byte, []int) {
	return fileDescriptor_efc4c0d29e2a2405, []int{8}
}

func (m *Song) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Song.Unmarshal(m, b)
}
func (m *Song) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Song.Marshal(b, m, deterministic)
}
func (m *Song) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Song.Merge(m, src)
}
func (m *Song) XXX_Size() int {
	return xxx_messageInfo_Song.Size(m)
}
func (m *Song) XXX_DiscardUnknown() {
	xxx_messageInfo_Song.DiscardUnknown(m)
}

var xxx_messageInfo_Song proto.InternalMessageInfo

func (m *Song) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Song) GetOwnerUid() string {
	if m != nil {
		return m.OwnerUid
	}
	return ""
}

func (m *Song) GetState() Song_State {
	if m != nil {
		return m.State
	}
	return Song_STATE_UNKNOWN
}

func (m *Song) GetInfo() *SongInfo {
	if m != nil {
		return m.Info
	}
	return nil
}

func (m *Song) GetSections() []*SongSection {
	if m != nil {
		return m.Sections
	}
	return nil
}

func init() {
	proto.RegisterEnum("songs.SongSection_SectionType", SongSection_SectionType_name, SongSection_SectionType_value)
	proto.RegisterEnum("songs.Song_State", Song_State_name, Song_State_value)
	proto.RegisterType((*ArtistInfo)(nil), "songs.ArtistInfo")
	proto.RegisterType((*SongInfo)(nil), "songs.SongInfo")
	proto.RegisterType((*SongSearchResult)(nil), "songs.SongSearchResult")
	proto.RegisterType((*Vocal)(nil), "songs.Vocal")
	proto.RegisterType((*SongSectionInfo)(nil), "songs.SongSectionInfo")
	proto.RegisterType((*TabSection)(nil), "songs.TabSection")
	proto.RegisterType((*ChordSection)(nil), "songs.ChordSection")
	proto.RegisterType((*SongSection)(nil), "songs.SongSection")
	proto.RegisterType((*Song)(nil), "songs.Song")
}

func init() {
	proto.RegisterFile("songs.proto", fileDescriptor_efc4c0d29e2a2405)
}

var fileDescriptor_efc4c0d29e2a2405 = []byte{
	// 575 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x94, 0xdf, 0x6e, 0xd3, 0x30,
	0x14, 0xc6, 0x49, 0xd6, 0x40, 0x7b, 0x92, 0x6d, 0xad, 0xa9, 0x50, 0xc4, 0x9f, 0x29, 0x32, 0x42,
	0x54, 0x80, 0x22, 0xd4, 0xdd, 0x70, 0x85, 0xe8, 0xba, 0x22, 0xaa, 0xb1, 0xb6, 0x72, 0x53, 0x10,
	0xdc, 0x44, 0x69, 0x93, 0x6d, 0x96, 0xb2, 0x38, 0x8a, 0x5d, 0xd0, 0xae, 0x78, 0x3c, 0xde, 0x84,
	0xe7, 0x40, 0x71, 0x9c, 0xd6, 0x53, 0xb7, 0xab, 0xe5, 0xf8, 0x3b, 0x27, 0xdf, 0x77, 0x7e, 0xce,
	0x0a, 0x36, 0x67, 0xd9, 0x25, 0xf7, 0xf3, 0x82, 0x09, 0x86, 0x2c, 0x59, 0x3c, 0x45, 0x34, 0xe3,
	0xa2, 0x58, 0xaf, 0x04, 0x65, 0x99, 0x92, 0xb0, 0x07, 0x30, 0x28, 0x04, 0xe5, 0x62, 0x9c, 0x5d,
	0x30, 0x84, 0xa0, 0x91, 0x45, 0xd7, 0x89, 0x6b, 0x78, 0x46, 0xaf, 0x45, 0xe4, 0x33, 0xfe, 0x03,
	0xcd, 0x39, 0xcb, 0x2e, 0xa5, 0xde, 0x05, 0x4b, 0x50, 0x91, 0xd6, 0x0d, 0x55, 0x81, 0xde, 0xc2,
	0xa3, 0x48, 0xbe, 0x83, 0xbb, 0xa6, 0xb7, 0xd7, 0xb3, 0xfb, 0x1d, 0xbf, 0x72, 0xdf, 0xbe, 0x99,
	0xd4, 0x1d, 0xe8, 0x3d, 0x74, 0xd3, 0x48, 0x24, 0x5c, 0x84, 0xeb, 0x3c, 0x8e, 0x44, 0x12, 0x5e,
	0xd3, 0x34, 0xa5, 0xdc, 0xdd, 0xf3, 0x8c, 0x9e, 0x45, 0x50, 0xa5, 0x2d, 0xa4, 0x74, 0x2e, 0x15,
	0x3c, 0x83, 0x76, 0x19, 0x60, 0x9e, 0x44, 0xc5, 0xea, 0x8a, 0x24, 0x7c, 0x9d, 0x0a, 0x74, 0x00,
	0x26, 0x8d, 0x55, 0x0a, 0x93, 0xc6, 0xe8, 0x1d, 0xb4, 0x4a, 0xcb, 0x90, 0x66, 0x17, 0xcc, 0x35,
	0x3d, 0xa3, 0x67, 0xf7, 0x0f, 0x55, 0x88, 0x3a, 0x3c, 0x69, 0x72, 0xf5, 0x84, 0x5f, 0x80, 0xf5,
	0x8d, 0xad, 0xa2, 0xb4, 0xdc, 0x27, 0xa5, 0x59, 0xc2, 0x5d, 0xc3, 0xdb, 0x2b, 0xf7, 0x91, 0x05,
	0x7e, 0x05, 0x87, 0x95, 0xa1, 0x24, 0x75, 0x2f, 0x98, 0x1c, 0x20, 0x88, 0x96, 0xaa, 0x0b, 0x7d,
	0x04, 0x5b, 0xc3, 0x2b, 0x1b, 0xed, 0xfe, 0x73, 0xff, 0x16, 0xf2, 0x20, 0x5a, 0x8e, 0xb7, 0x35,
	0xd1, 0x07, 0x10, 0x06, 0xeb, 0x57, 0x99, 0x49, 0xa5, 0x77, 0x54, 0x7a, 0x99, 0x93, 0x54, 0x12,
	0x9e, 0x81, 0x33, 0xbc, 0x62, 0x45, 0x5c, 0x7b, 0x7e, 0xba, 0xcb, 0xf3, 0xe8, 0xb6, 0xa7, 0x1c,
	0xb8, 0xcf, 0x15, 0xff, 0x35, 0xc1, 0xd6, 0x76, 0xdd, 0xe1, 0xfa, 0x06, 0x1a, 0x1a, 0xd2, 0x27,
	0x1a, 0x52, 0x8d, 0x0e, 0x91, 0x3d, 0x68, 0x00, 0x0e, 0xaf, 0x0e, 0x43, 0x71, 0x93, 0x27, 0xf2,
	0x46, 0x0f, 0xfa, 0x47, 0xbb, 0x33, 0xbe, 0xfa, 0x1b, 0xdc, 0xe4, 0x09, 0xb1, 0xf9, 0xb6, 0x40,
	0x7d, 0xb0, 0x45, 0xb4, 0x0c, 0xd5, 0x91, 0xdb, 0x90, 0xae, 0xf5, 0xd7, 0xb4, 0x85, 0x4d, 0x40,
	0x6c, 0xc1, 0x7f, 0x80, 0xfd, 0x55, 0xb9, 0xe3, 0x66, 0xca, 0x92, 0x53, 0x8f, 0xd5, 0x94, 0x0e,
	0x8c, 0x38, 0x2b, 0xad, 0xc2, 0x67, 0x60, 0x6b, 0x49, 0x90, 0x0b, 0xdd, 0xf9, 0x68, 0x18, 0x8c,
	0xa7, 0x93, 0x30, 0xf8, 0x31, 0x1b, 0x85, 0x8b, 0xc9, 0xd9, 0x64, 0xfa, 0x7d, 0xd2, 0x7e, 0x80,
	0x0e, 0xc1, 0x0e, 0x06, 0x27, 0xa1, 0x52, 0xdb, 0x06, 0xea, 0xc0, 0xfe, 0xf0, 0xcb, 0x94, 0x9c,
	0x6e, 0x8e, 0x4c, 0xfc, 0xcf, 0x80, 0x46, 0xb9, 0xe3, 0x0e, 0xc2, 0x67, 0xd0, 0x62, 0xbf, 0xb3,
	0xa4, 0x08, 0xd7, 0x34, 0x96, 0x1c, 0x5b, 0xa4, 0x29, 0x0f, 0x16, 0x34, 0x46, 0xaf, 0xc1, 0xe2,
	0x22, 0x12, 0x35, 0xac, 0x8e, 0x06, 0xcb, 0x9f, 0x97, 0x02, 0xa9, 0x74, 0xf4, 0x52, 0x5d, 0x44,
	0xe3, 0xee, 0x6f, 0xbb, 0xba, 0x01, 0x1f, 0x9a, 0x0a, 0x02, 0x77, 0x2d, 0xf9, 0x9f, 0x88, 0x76,
	0xe9, 0x93, 0x4d, 0x0f, 0x3e, 0x06, 0x4b, 0x9a, 0x94, 0xfb, 0xcc, 0x83, 0x41, 0xa0, 0xef, 0xdc,
	0x02, 0xeb, 0x94, 0x0c, 0x3e, 0x07, 0x6d, 0x03, 0x39, 0xd0, 0x1c, 0x4e, 0xcf, 0x67, 0x5f, 0x47,
	0xc1, 0xa8, 0x6d, 0x9e, 0x38, 0x3f, 0x81, 0x33, 0xc9, 0x91, 0xe7, 0xcb, 0xe5, 0x43, 0xf9, 0x33,
	0x72, 0xfc, 0x3f, 0x00, 0x00, 0xff, 0xff, 0x31, 0x33, 0x03, 0x2d, 0x70, 0x04, 0x00, 0x00,
}