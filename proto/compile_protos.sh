
# Script compiling dart protos.

# Command to install dart_protoc_plugin
# $ pub global activate protoc_plugin

protoc \
  -I=./ \
  --dart_out=lib \
  proto/messages.proto \


