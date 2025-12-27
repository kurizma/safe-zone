FROM jenkins/jenkins:lts

USER root

# --- Headless Chrome for Angular/Karma tests (future need) ---
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      chromium \
      chromium-driver && \
    rm -rf /var/lib/apt/lists/*

# Environment variables so Karma/Angular know where Chrome is
ENV CHROMIUM_BIN=/usr/bin/chromium
ENV CHROME_BIN=/usr/bin/chromium

# --- Docker official repo for Docker Engine + CLI + compose plugin ---
RUN install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc && \
    chmod a+r /etc/apt/keyrings/docker.asc

RUN echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null

# --- Install Docker CLI, compose plugin, and dev tools ---
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      docker-ce \
      docker-ce-cli \
      containerd.io \
      docker-buildx-plugin \
      docker-compose-plugin \
      git \
      maven \
      nodejs \
      npm && \
    usermod -aG docker jenkins && \
    rm -rf /var/lib/apt/lists/*

USER jenkins
