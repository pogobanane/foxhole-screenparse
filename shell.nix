{pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    buildInputs = with pkgs; [
      nodejs
      nodePackages.npm
      node2nix

      # vue js specific
      nodePackages.vue-cli
      nodePackages.vue-language-server
    ];

    # 'canvas' (binaries loaded via npm) depends on libuuid.so.1
    LD_LIBRARY_PATH="${pkgs.util-linux.lib}/lib/";
  }
