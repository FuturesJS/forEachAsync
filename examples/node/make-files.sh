mkdir -p testfiles
touch ./testfiles/0b.bin
dd bs=1m count=1 if=/dev/zero of=./testfiles/1mb.bin
dd bs=1k count=64 if=/dev/zero of=./testfiles/64kb.bin
dd bs=1k count=96 if=/dev/zero of=./testfiles/96kb.bin
dd bs=1k count=1 if=/dev/zero of=./testfiles/1kb.bin
# this will copy one block which could be between 512b and 4k (or more)
dd bs=1b count=1 if=/dev/zero of=./testfiles/block.bin
