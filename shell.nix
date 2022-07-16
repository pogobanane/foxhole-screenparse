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
  }
